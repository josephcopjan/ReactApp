package com.in28minutes.springboot.controller;

import com.in28minutes.springboot.model.Address;
import com.in28minutes.springboot.model.Customer;
import com.in28minutes.springboot.model.Student;
import com.in28minutes.springboot.model.Subject;
import com.in28minutes.springboot.repository.AddressRepository;
import com.in28minutes.springboot.service.IAddressService;
import com.in28minutes.springboot.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@Controller
public class StudentController {

    @Autowired
    StudentService studentService;

    @Autowired
    IAddressService addressService;

    @Autowired
    AddressRepository addressRepository;

    @CrossOrigin
    @RequestMapping(value = "/students", method = RequestMethod.GET)
    public ResponseEntity<Object> getStudents() {
        System.out.println("students");
        return new ResponseEntity<>(studentService.getStudents(), HttpStatus.OK);
    }

    @CrossOrigin
    @RequestMapping(value = "/addStudent", method = RequestMethod.POST)
    public ResponseEntity<Object> addStudent(@RequestBody Student student, BindingResult result) {
        if (result.hasErrors()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(result);
        }
        // Customer customer = customerService.getCustomer(String.valueOf(id));
        String aaa ="adsdsd";
        System.out.println(student.getFirstName());
        Address savedObject= addressRepository.save(student.getAddress()); //.saveAndFlush(newObject);
        System.out.println(savedObject.getId());

        studentService.addStudent(student);
        return new ResponseEntity<>(student, HttpStatus.OK);
    }

    @CrossOrigin
    @RequestMapping(value = "/updateStudent", method = RequestMethod.POST)
    public ResponseEntity<Object> updateStudent(@RequestBody Student student, BindingResult result) {
        if (result.hasErrors()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(result);
        }
        Student storedStudent = studentService.getStudent(student.getId());
        // Customer customer = customerService.getCustomer(String.valueOf(id));
        String aaa ="adsdsd";
        System.out.println(student.getFirstName());
        //Address savedObject= addressRepository.save(student.getAddress()); //.saveAndFlush(newObject);
        //System.out.println(savedObject.getId());
        Integer id = (int) (long) student.getId();

        if(student.getAddress().getCountry()!=null && storedStudent.getAddress().getCountry().getId()!=student.getAddress().getCountry().getId()){
            storedStudent.getAddress().setCountry(student.getAddress().getCountry());
            studentService.updateStudent(storedStudent);
        }
        studentService.updateStudent(student);
        return new ResponseEntity<>(student, HttpStatus.OK);
    }

    @CrossOrigin
    @RequestMapping(value = "/student/{id}", method = RequestMethod.GET)
    public ResponseEntity<Object> getStudentById(@PathVariable("id") int id) {
        Student student = studentService.getStudent(Long.valueOf(id));
        System.out.println("aaa");
        return new ResponseEntity<>(student, HttpStatus.OK);
    }
}
