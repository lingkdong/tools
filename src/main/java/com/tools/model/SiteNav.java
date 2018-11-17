package com.tools.model;

import javax.persistence.*;
import java.io.Serializable;

/**
 * @Author: dongxin
 * @Date: 2018/11/14 14:54
 * site navigation
 **/
@Entity
public class SiteNav implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "name", unique = true, length = 20, nullable = false)
    private String name;

    @Column(name = "url", unique = true, length = 200, nullable = false)
    private String url;

    @Column(name = "title", unique = true, length = 200, nullable = false)
    private String title;

    @Column(name = "content", unique = true, length = 200, nullable = false)
    private String content;

    @Column(name = "icon", unique = true, length = 200)
    private String icon;
    //Resource.code
    @Column(name = "resource_code", length = 50, nullable = false)
    private String resourceCode;

    private Integer sortNum;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public String getResourceCode() {
        return resourceCode;
    }

    public void setResourceCode(String resourceCode) {
        this.resourceCode = resourceCode;
    }

    public Integer getSortNum() {
        return sortNum;
    }

    public void setSortNum(Integer sortNum) {
        this.sortNum = sortNum;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
