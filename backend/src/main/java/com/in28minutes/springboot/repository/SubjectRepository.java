package com.in28minutes.springboot.repository;

import com.in28minutes.springboot.model.Subject;
import com.in28minutes.springboot.model.User;
import org.springframework.data.repository.CrudRepository;

public interface SubjectRepository extends CrudRepository<Subject, Long> {
}
