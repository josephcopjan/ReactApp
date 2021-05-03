package com.in28minutes.springboot.repository;

import com.in28minutes.springboot.model.ERole;
import com.in28minutes.springboot.model.Role;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface RoleRepository extends CrudRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
