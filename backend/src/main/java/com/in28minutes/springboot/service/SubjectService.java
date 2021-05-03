package com.in28minutes.springboot.service;

import com.in28minutes.springboot.model.Subject;

import java.util.Collection;

public interface SubjectService {

    public abstract Collection<Subject> getSubjects();
}
