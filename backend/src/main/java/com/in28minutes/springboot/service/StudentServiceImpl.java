package com.in28minutes.springboot.service;

import com.in28minutes.springboot.model.Student;
import com.in28minutes.springboot.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class StudentServiceImpl implements StudentService{

    @Autowired
    private StudentRepository repository;

    @Override
    public void addStudent(Student student) {
        repository.save(student);
    }

    @Override
    public void updateStudent(Student student) {
        repository.save(student);
    }

    @Override
    public void deleteStudent(int id) {

    }

    @Override
    public Collection<Student> getStudents() {
        List<Student> result =
                StreamSupport.stream(repository.findAll().spliterator(), false)
                        .collect(Collectors.toList());
        return result;
    }

    @Override
    public Student getStudent(long id) {
        return repository.findById(id);
    }
}
