package com.in28minutes.springboot.controller;

import com.in28minutes.springboot.service.CountryService;
import com.in28minutes.springboot.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class CountryController {

    @Autowired
    CountryService countryService;

    @CrossOrigin
    @RequestMapping(value = "/countries", method = RequestMethod.GET)
    public ResponseEntity<Object> getCountries() {
        System.out.println("countries");
        return new ResponseEntity<>(countryService.getCountries(), HttpStatus.OK);
    }
}
