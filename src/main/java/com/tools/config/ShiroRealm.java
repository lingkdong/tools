package com.tools.config;

import com.tools.constants.UserType;
import com.tools.model.User;
import com.tools.constants.UserStatus;
import com.tools.service.UserService;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashSet;
import java.util.Set;

/**
 * Created by lk on 2018/1/19.
 */
public class ShiroRealm extends AuthorizingRealm {
    @Autowired
    private UserService userService;
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
        SimpleAuthorizationInfo authorizationInfo = new SimpleAuthorizationInfo();
        User user  = (User)principals.getPrimaryPrincipal();
        //get role and permisson from database.
        authorizationInfo.addRole(UserType.getName(user.getType()));
        Set permission=new HashSet();
        permission.add("create");
        permission.add("update");
        permission.add("delete");
        permission.add("view");
        authorizationInfo.setStringPermissions(permission);
        return authorizationInfo;
    }

    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
        UsernamePasswordToken token= (UsernamePasswordToken) authenticationToken;
        String username= (String)token.getUsername();
        User user=userService.findByUsernameOrEmail(username);
        if(user==null||!user.getPassword().equals(String.valueOf(token.getPassword()))){
            throw new AccountException("Incorrect username or password.");
        }else if(UserStatus.CANCEL.code().equals(user.getStatus())){
            throw  new DisabledAccountException("The account disabled.");
        }
        SimpleAuthenticationInfo authenticationInfo = new SimpleAuthenticationInfo(
                user,
                user.getPassword(),
                getName()  //realm name
        );
        return authenticationInfo;
    }
}
