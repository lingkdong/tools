package com.tools.dao;

import com.tools.model.User;
import org.springframework.data.jpa.repository.JpaRepository;


/**
 * Created by DT254 on 2017/11/8.
 */
public interface UserDao extends JpaRepository<User, Long> {
    User findFirstByUsername(String name);

    User findFirstByEmail(String email);
}
