package com.tools.service.impl;

import com.tools.constants.IssueStatus;
import com.tools.dao.IssueDao;
import com.tools.dao.JdbcDao;
import com.tools.dto.issue.FindIssuesParam;
import com.tools.dto.issue.IssueStatusDto;
import com.tools.dto.issue.ViewIssuesDto;
import com.tools.model.Issue;
import com.tools.model.User;
import com.tools.service.IssueService;
import com.tools.service.UsersService;
import com.tools.utils.BeanUtil;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.collections.MapUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

/**
 * @Author: dongxin
 * @Date: 2018/7/13 16:25
 **/
@Slf4j
@Service
public class IssueSericeImpl implements IssueService {
    @Autowired
    private IssueDao issueDao;
    @Autowired
    private UsersService usersService;
    @Autowired
    private JdbcDao jdbcDao;
    @Override
    public Page<ViewIssuesDto> findIssues(FindIssuesParam param, Pageable pageable) {
        Page issues=findIssuesParam(param,pageable);
        if (pageable.getPageNumber() >= issues.getTotalPages() && (issues.getTotalPages() - 1) >= 0) {
            pageable = new PageRequest(issues.getTotalPages() - 1, pageable.getPageSize(), pageable.getSort());
            issues = findIssuesParam(param, pageable);
        }
        if (issues.hasContent()) {
            List<Issue> issueList=issues.getContent();
            //get userIds then find users
            Map<Long, User> userMap=usersService.toIdMap(
                    usersService.findAllByIdIn(issueList
                    .stream()
                    .map(Issue::getUserId).collect(Collectors.toSet())));
            //build dto
            List<ViewIssuesDto> dtos=new ArrayList<>();
            issueList.stream().forEach(item->{
                ViewIssuesDto dto=BeanUtil.cast(ViewIssuesDto.class,item);
                dto.setUsersDto(usersService.toDto(userMap.get(item.getUserId())));
                dtos.add(dto);
            });
            Page<ViewIssuesDto> result = new PageImpl<>(dtos, new PageRequest(issues.getNumber(), issues.getSize
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
     * @return
     */
    public List<IssueStatusDto>  getStatusStatistics(){
        List<Map<String, Object>> list=jdbcDao.getIssueStatusStatistics();
        if(CollectionUtils.isNotEmpty(list)){
            List<IssueStatusDto> dtos=new ArrayList<>();
            list.stream().forEach(item->{
                IssueStatus issueStatus=IssueStatus.getIssueStatus(MapUtils.getByte(item,"status"));
                if(issueStatus!=null){
                    dtos.add(IssueStatusDto.newIssueStatusDto()
                            .code(issueStatus.code())
                            .name(issueStatus.getName())
                            .totalNum(MapUtils.getLong(item,"totalNum")).build());
                }
            });
            return dtos;
        }
        return Collections.EMPTY_LIST;
    }


}
