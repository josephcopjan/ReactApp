package com.in28minutes.springboot.service;

import com.in28minutes.springboot.model.Student;
import com.in28minutes.springboot.model.Subject;
import com.in28minutes.springboot.repository.StudentRepository;
import com.in28minutes.springboot.repository.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class SubjectServiceImpl implements SubjectService {

    @Autowired
    private SubjectRepository repository;

    @Override
    public Collection<Subject> getSubjects() {
        List<Subject> result =
                StreamSupport.stream(repository.findAll().spliterator(), false)
                        .collect(Collectors.toList());
        return result;
    }
}
