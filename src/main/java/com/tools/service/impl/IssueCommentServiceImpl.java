package com.tools.service.impl;

import com.tools.constants.IssueCommentType;
import com.tools.constants.IssueStatus;
import com.tools.constants.UserType;
import com.tools.dao.IssueCommentDao;
import com.tools.dto.BaseResponseDTO;
import com.tools.dto.HttpStatus;
import com.tools.dto.PreException;
import com.tools.dto.issue.CreateIssueCommentParam;
import com.tools.dto.issue.ViewIssueCommentDto;
import com.tools.dto.issue.ViewIssueDto;
import com.tools.model.Issue;
import com.tools.model.IssueComment;
import com.tools.model.User;
import com.tools.service.IssueCommentService;
import com.tools.service.IssueService;
import com.tools.service.UsersService;
import com.tools.utils.BeanUtil;
import com.tools.worker.Worker;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

/**
 * @Author: dongxin
 * @Date: 2019/1/30 15:58
 **/
@Slf4j
@Service
public class IssueCommentServiceImpl implements IssueCommentService {
    @Autowired
    private IssueCommentDao issueCommentDao;
    @Autowired
    private IssueService issueService;
    @Autowired
    private UsersService usersService;

    public BaseResponseDTO getIssueComments(Long issueId) {
        if (issueId == null) {
            log.info("<IssueCommentServiceImpl.getIssueComment failed issueId is null>");
            throw new PreException(HttpStatus.PARAM_INCORRECT);
        }
        Issue issue = issueService.findOne(issueId);
        if (issue == null) {
            log.info("<IssueCommentServiceImpl.getIssueComment failed, can't find issue by id={}>", issueId);
            throw new PreException(HttpStatus.PARAM_INCORRECT);
        }
        ViewIssueDto viewIssueDto = issueService.toDto(issue);
        List<IssueComment> issueComments = issueCommentDao.findByIssueIdOrderByCreateTimeAsc(issueId);
        List<ViewIssueCommentDto> commentDtos = new ArrayList<>();
        if (CollectionUtils.isNotEmpty(issueComments)) {
            Map<Long, User> userMap = usersService.toIdMap(
                    usersService.findAllByIdIn(issueComments
                            .stream()
                            .map(IssueComment::getUserId).collect(Collectors.toSet())));

            issueComments.stream().forEach(item -> {
                ViewIssueCommentDto dto = BeanUtil.cast(ViewIssueCommentDto.class, item);
                dto.setIssueCommentType(IssueCommentType.get(item.getType()));
                dto.setUsersDto(usersService.toDto(userMap.get(item.getUserId())));
                commentDtos.add(dto);
            });
        }
        Map map = new HashMap();
        map.put("issueDto", viewIssueDto);
        map.put("commentDtos", commentDtos);
        return Worker.OK(map);
    }

    public BaseResponseDTO createIssueComment(CreateIssueCommentParam param){
        BaseResponseDTO dto=detectComment(param);
        if(!Worker.isOK(dto))return dto;
        Date date=new Date();
        IssueComment issueComment=new IssueComment();
        issueComment.setComment(param.getComment());
        issueComment.setCreateTime(date);
        issueComment.setIssueId(param.getIssueId());
        issueComment.setType(param.getType());
        issueComment.setUserId(Worker.getCurrentUser().getId());
        issueComment.setLastUpdateTime(date);
        issueCommentDao.save(issueComment);
        changeIssue(param);
        return Worker.OK();
    }

    private BaseResponseDTO detectComment(CreateIssueCommentParam param){
        User sessionUser=Worker.getCurrentUser();
        if(sessionUser==null){
            return new BaseResponseDTO(HttpStatus.LOGIN_EXPIRED);
        }
        if(param.getIssueId()==null){
            log.info("<issue id is null>");
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT);
        }
        if(IssueCommentType.get(param.getType())==null){
            log.info("<issue comment is unknow type={}>",param.getType());
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT);
        }
        if(IssueCommentType.COMMENT.code().equals(param.getType())){
            BaseResponseDTO dto=Worker.isBlank2("comment",param.getComment());
            if(!Worker.isOK(dto)) return dto;
        }else if(!sessionUser.getType().equals(UserType.ADMIN.code())){
            log.info("<issue comment  no permission type={},userId={}>",param.getType(),sessionUser.getId());
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT);
        }
        Issue issue = issueService.findOne(param.getIssueId());
        if (issue == null) {
            log.info("<can't find issue by id={}>", param.getIssueId());
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT);
        }
        return Worker.OK();
    }

    private int changeIssue(CreateIssueCommentParam param){
        if(IssueCommentType.CLOSED.code().equals(param.getType())){
           return issueService.updateStatus(param.getIssueId(), IssueStatus.CLOSED);
        }else if(IssueCommentType.REOPEN.code().equals(param.getType())){
            return issueService.updateStatus(param.getIssueId(), IssueStatus.OPEN);
        }else if(IssueCommentType.COMMENT.code().equals(param.getType())){
            return issueService.addCommentCount(param.getIssueId());
        }
        return 0;
    }
}
