package com.tools.service.impl;

import com.tools.constants.IssueLabel;
import com.tools.constants.IssueStatus;
import com.tools.dao.IssueDao;
import com.tools.dao.JdbcDao;
import com.tools.dto.BaseResponseDTO;
import com.tools.dto.HttpStatus;
import com.tools.dto.UploadFileDto;
import com.tools.dto.issue.*;
import com.tools.model.Issue;
import com.tools.model.User;
import com.tools.service.FileService;
import com.tools.service.IssueService;
import com.tools.service.UserService;
import com.tools.service.UsersService;
import com.tools.utils.BeanUtil;
import com.tools.utils.FileChannelEnum;
import com.tools.utils.ImgUtil;
import com.tools.worker.Worker;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.*;
import java.util.stream.Collectors;

/**
 * @Author: dongxin
 * @Date: 2018/7/13 16:25
 **/
@Slf4j
@Service
public class IssueSericeImpl implements IssueService {
    private final int large=800;
    @Autowired
    private IssueDao issueDao;
    @Autowired
    private UsersService usersService;
    @Autowired
    private UserService userService;
    @Autowired
    private JdbcDao jdbcDao;
    @Autowired
    private FileService fileService;

    @Override
    public Page<ViewIssueListDto> findIssues(FindIssuesParam param, Pageable pageable) {
        Page issues = findIssuesParam(param, pageable);
        if (pageable.getPageNumber() >= issues.getTotalPages() && (issues.getTotalPages() - 1) >= 0) {
            pageable = new PageRequest(issues.getTotalPages() - 1, pageable.getPageSize(), pageable.getSort());
            issues = findIssuesParam(param, pageable);
        }
        if (issues.hasContent()) {
            List<Issue> issueList = issues.getContent();
            //get userIds then find users
            Map<Long, User> userMap = usersService.toIdMap(
                    usersService.findAllByIdIn(issueList
                            .stream()
                            .map(Issue::getUserId).collect(Collectors.toSet())));
            //build dto
            List<ViewIssueListDto> dtos = new ArrayList<>();
            issueList.stream().forEach(item -> {
                ViewIssueListDto dto = BeanUtil.cast(ViewIssueListDto.class, item);
                dto.setUsersDto(usersService.toDto(userMap.get(item.getUserId())));
                dto.setIssueStatus(IssueStatus.getIssueStatus(item.getStatus()));
                dto.setIssueLabel(IssueLabel.getIssueLabel(item.getLabel()));
                dtos.add(dto);
            });
            Page<ViewIssueListDto> result = new PageImpl<>(dtos, new PageRequest(issues.getNumber(), issues.getSize
                    ()), issues.getTotalElements());
            return result;
        }
        return issues;
    }


    private Page<Issue> findIssuesParam(FindIssuesParam findIssuesParam, Pageable pageable) {
        Issue issue = new Issue();
        ExampleMatcher exampleMatcher = ExampleMatcher.matching()
                .withMatcher("title", ExampleMatcher.GenericPropertyMatchers.contains())
                .withMatcher("lable", ExampleMatcher.GenericPropertyMatchers.exact())
                .withMatcher("status", ExampleMatcher.GenericPropertyMatchers.exact())
                .withIgnoreNullValues()
                .withIgnoreCase();
        issue.setTitle(findIssuesParam.getTitle());
        issue.setLabel(findIssuesParam.getLabel());
        issue.setStatus(findIssuesParam.getStatus());
        Example<Issue> example = Example.of(issue, exampleMatcher);
        return issueDao.findAll(example, pageable);
    }

    /**
     * (status,num)
     *
     * @return
     */
    public List<IssueStatusDto> getStatusStatistics() {
        List<Map<String, Object>> list = jdbcDao.getIssueStatusStatistics();
        if (CollectionUtils.isNotEmpty(list)) {
            List<IssueStatusDto> dtos = new ArrayList<>();
            list.stream().forEach(item -> {
                IssueStatus issueStatus = IssueStatus.getIssueStatus(MapUtils.getByte(item, "status"));
                if (issueStatus != null) {
                    dtos.add(IssueStatusDto.newIssueStatusDto()
                            .code(issueStatus.code())
                            .name(issueStatus.getName())
                            .totalNum(MapUtils.getLong(item, "totalNum")).build());
                }
            });
            return dtos;
        }
        return Collections.EMPTY_LIST;
    }

    public BaseResponseDTO uploadFile(UploadFileDto uploadFileDto) {
        String issueDir = getIssueDir();
        String dir =
                fileService.getUploadBase()
                        +File.separator+ issueDir;
        uploadFileDto.setDir(dir);
        //detect
        BaseResponseDTO dto = fileService.detectFileDto(uploadFileDto);
        if (!Worker.isOK(dto)) return dto;
        //set new FileName
        uploadFileDto.setFileName(fileService.getTokenFileName(uploadFileDto.getFile().getOriginalFilename()));
        dto = fileService.doUpload(uploadFileDto);
        if (!Worker.isOK(dto)) return dto;
        File file = (File) dto.getData();
        if(ImgUtil.isLargeThan(file,large)){
            file = ImgUtil.doCompress(file.getAbsolutePath(), large, large, "", true);
        }
        String fileName=file.getName();
        return Worker.OK(issueDir + File.separator + fileName);
    }

    private String getIssueDir() {
        return FileChannelEnum.ISSUES.value()
                + File.separator + fileService.getDateDir();
    }

    public BaseResponseDTO createIssue(CreateIssueParam createIssueParam){
        BaseResponseDTO dto=Worker.isBlank2("title",createIssueParam.getTitle());
        if(!Worker.isOK(dto)) return dto;
        //获取当前用户
        User sessionUser = Worker.getCurrentUser();
        if (sessionUser == null) return new BaseResponseDTO(HttpStatus.LOGIN_EXPIRED);
        //set default label
        if(StringUtils.isBlank(createIssueParam.getLabel()))createIssueParam.setLabel(IssueLabel.UNLABELED.code());
        Issue issue=new Issue();
        Date date=new Date();
        issue.setStatus(IssueStatus.OPEN.code());
        issue.setLabel(createIssueParam.getLabel());
        issue.setTitle(createIssueParam.getTitle());
        issue.setBody(createIssueParam.getBody());
        issue.setCommentCount(0L);
        issue.setCreateTime(date);
        issue.setLastUpdateTime(date);
        issue.setUserId(sessionUser.getId());
        issueDao.save(issue);
        return Worker.OK(issue.getTitle());
    }

    public Issue findOne(Long id){
       return issueDao.findOne(id);
    }

    public ViewIssueDto toDto(Issue issue){
        ViewIssueDto dto = BeanUtil.cast(ViewIssueDto.class, issue);
        dto.setUsersDto(usersService.toDto(userService.findOne(issue.getUserId())));
        dto.setIssueStatus(IssueStatus.getIssueStatus(issue.getStatus()));
        dto.setIssueLabel(IssueLabel.getIssueLabel(issue.getLabel()));
        return dto;
    }
}
