package com.in28minutes.springboot.service;

import com.in28minutes.springboot.model.Customer;
import com.in28minutes.springboot.model.Student;

import java.util.Collection;

public interface StudentService {
    public abstract void addStudent(Student student);
    public abstract void updateStudent(int id, Student student);
    public abstract void deleteStudent(int id);
    public abstract Collection<Student> getStudents();
    public abstract Student getStudent(long id);
}
