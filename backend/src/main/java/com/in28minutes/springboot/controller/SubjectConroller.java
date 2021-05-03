package com.in28minutes.springboot.controller;

import com.in28minutes.springboot.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class SubjectConroller {

    @Autowired
    SubjectService subjectService;

    @CrossOrigin
    @RequestMapping(value = "/subjects", method = RequestMethod.GET)
    public ResponseEntity<Object> getSubjects() {
        System.out.println("subjects");
        return new ResponseEntity<>(subjectService.getSubjects(), HttpStatus.OK);
    }


}
