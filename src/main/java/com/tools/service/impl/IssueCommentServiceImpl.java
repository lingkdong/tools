package com.tools.service.impl;

import com.tools.constants.IssueCommentType;
import com.tools.dao.IssueCommentDao;
import com.tools.dto.BaseResponseDTO;
import com.tools.dto.HttpStatus;
import com.tools.dto.PreException;
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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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
        List<IssueComment> issueComments = issueCommentDao.findByIssueIdOrderByCreateTimeDesc(issueId);
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
}
