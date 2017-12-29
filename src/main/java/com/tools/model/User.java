package com.tools.model;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by DT254 on 2017/4/12.
 */
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO )
    private Long id;

    @Column(name = "username",unique = true,length = 20,nullable = false)
    private String username;

    @Column(name="password",length = 200,nullable=false)
    private String password;

    @Column(name="email",length =50,unique = true,nullable = false)
    private String email;

    @Column(name="true_name",length =20)
    private String trueName;

    @Column(name="male",nullable = false)
    private Boolean male;

    private Date birthday;

    private Date createTime;
    private Date lastUpdateTime;

    @Column(name="picture",length = 200,nullable=false)
    private String picture;

    @Column(name="status",length =3,unique = true,nullable = false)
    private String status;//000 未认证，001 正常 ，002 锁定
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTrueName() {
        return trueName;
    }

    public void setTrueName(String trueName) {
        this.trueName = trueName;
    }

    public Boolean getMale() {
        return male;
    }

    public void setMale(Boolean male) {
        this.male = male;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getLastUpdateTime() {
        return lastUpdateTime;
    }

    public void setLastUpdateTime(Date lastUpdateTime) {
        this.lastUpdateTime = lastUpdateTime;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
