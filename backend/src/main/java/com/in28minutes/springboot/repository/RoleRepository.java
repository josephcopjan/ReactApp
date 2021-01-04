package com.in28minutes.springboot.repository;

import com.in28minutes.springboot.model.Role;
import org.springframework.data.repository.CrudRepository;

public interface RoleRepository extends CrudRepository<Role, Long> {
}
