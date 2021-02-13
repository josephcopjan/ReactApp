package com.in28minutes.springboot.controller;

import com.in28minutes.springboot.model.Address;
import com.in28minutes.springboot.model.Country;
import com.in28minutes.springboot.model.Student;
import com.in28minutes.springboot.service.CountryService;
import com.in28minutes.springboot.service.IAddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Controller
public class AddressController {

    @Autowired
    IAddressService addressService;

    @CrossOrigin
    @RequestMapping(value = "/addresses", method = RequestMethod.GET)
    public ResponseEntity<Object> getCountries() {
        System.out.println("students");
        List<Address> addresses = addressService.getAddresses();
        System.out.println(addresses.size());
        return new ResponseEntity<>(addresses, HttpStatus.OK);
    }
}
