package com.tools.dao;

import com.tools.model.User;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Set;


/**
 * Created by lk on 2017/11/8.
 */
public interface UserDao extends JpaRepository<User, Long> {
    User findFirstByUsername(String name);

    User findFirstByEmail(String email);

    User findFirstByUsernameOrEmail(String username, String email);

    Page<User> findAll(Example example, Pageable pageable);

    List<User> findAllByIdIn(Set<Long> ids);
}
