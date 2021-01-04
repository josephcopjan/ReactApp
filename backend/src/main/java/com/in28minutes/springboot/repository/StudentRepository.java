package com.in28minutes.springboot.repository;

import com.in28minutes.springboot.model.Student;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface StudentRepository extends CrudRepository<Student, Long> {

    List<Student> findByLastName(String lastName);

    Student findById(long id);
}
