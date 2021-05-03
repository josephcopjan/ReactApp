package com.in28minutes.springboot.repository;

import com.in28minutes.springboot.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long>  {
    Optional<User> findByUserName(String username);

    Boolean existsByUserName(String username);

    Boolean existsByEmail(String email);
}
