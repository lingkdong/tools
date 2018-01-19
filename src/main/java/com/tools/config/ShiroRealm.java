package com.tools.config;

import com.tools.dto.HttpStatus;
import com.tools.dto.PreException;
import com.tools.model.User;
import com.tools.service.UserService;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashSet;
import java.util.Set;

/**
 * Created by DT254 on 2018/1/19.
 */
public class ShiroRealm extends AuthorizingRealm {
    @Autowired
    private UserService userService;
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
        SimpleAuthorizationInfo authorizationInfo = new SimpleAuthorizationInfo();
        User user  = (User)principals.getPrimaryPrincipal();
        //get role and permisson from database.
        authorizationInfo.addRole("user");
        Set permission=new HashSet();
        permission.add("create");
        permission.add("update");
        permission.add("delete");
        permission.add("view");
        authorizationInfo.setStringPermissions(permission);
        return authorizationInfo;
    }

    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
        String username= (String)token.getPrincipal();
        User user=userService.findByUsernameOrEmail(username);
        if(user==null||!user.getPassword().equals(token.getCredentials())){
            throw new PreException(HttpStatus.USER_NOT_EXIST,"Incorrect username or password.");
        }
        SimpleAuthenticationInfo authenticationInfo = new SimpleAuthenticationInfo(
                user,
                user.getPassword(),
                getName()  //realm name
        );
        return authenticationInfo;
    }
}
