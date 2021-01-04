package com.in28minutes.springboot.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.in28minutes.springboot.exception.ProductNotfoundException;
import com.in28minutes.springboot.model.Customer;
import com.in28minutes.springboot.model.Product;
import com.in28minutes.springboot.service.CustomerService;

@Controller
public class CustomerController {
	
	@Autowired
	CustomerService customerService;
	
	@CrossOrigin
	@RequestMapping(value = "/customers")
	public ResponseEntity<Object> getCustomers() {
		System.out.println("ddddd");
		return new ResponseEntity<>(customerService.getCustomers(), HttpStatus.OK);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/customer/{id}", method = RequestMethod.GET)
    public ResponseEntity<Object> getCustomerById(@PathVariable("id") int id) {
	   Customer customer = customerService.getCustomer(String.valueOf(id));
	   System.out.println("aaa");
       return new ResponseEntity<>(customer, HttpStatus.OK);
    }
	
	@CrossOrigin
	@RequestMapping(value = "/addCustomer", method = RequestMethod.POST)
    public ResponseEntity<Object> addCustomer(@RequestBody Customer customer) {
	  // Customer customer = customerService.getCustomer(String.valueOf(id));
		String aaa ="adsdsd";
		System.out.println(customer.getFirstName());
		customerService.addCustomer(customer);
		return new ResponseEntity<>(customer, HttpStatus.OK);
    }
	
	@CrossOrigin
	@RequestMapping(value = "/removeCustomer", method = RequestMethod.POST)
    public ResponseEntity<Object> removeCustomer(@RequestBody Customer customer) {

		System.out.println("---> " + customer.getId());
		List<Customer>  customers = new ArrayList<Customer>(customerService.getCustomers());
		for(int i=0;i<customers.size();i++) {
			if(customers.get(i).getId()==customer.getId()) {
				System.out.println("Removing " + customers.get(i).getFirstName());
				customers.remove(customers.get(i));
			}
		}
		//customerService.addCustomer(customer);
		return new ResponseEntity<>(customer, HttpStatus.OK);
    }
	
	@CrossOrigin
	@RequestMapping(value = "/findCustomer", method = RequestMethod.POST)
    public ResponseEntity<Object> findCustomer(@RequestBody Customer customer) {
		
		//customers = (ArrayList<Customer>) customerService.getCustomers();
		List<Customer>  customers = new ArrayList<Customer>(customerService.getCustomers());
		System.out.println("-----------------------" + customers.size());
		Customer finalCustomer = null;
		List<Customer> finalCustomers = new ArrayList<Customer>();
		
		for(int i=0;i<customers.size();i++) {
			if(customer.getFirstName()!=null && !customer.getFirstName().equals("")) {
				if(customer.getFirstName().equals(customers.get(i).getFirstName())) {
					finalCustomer = customers.get(i);
				} else {
					finalCustomer = null;
					continue;
				}
			}
			
			if(customer.getLastName()!=null && !customer.getLastName().equals("")) {
				if(customer.getLastName().equals(customers.get(i).getLastName())) {
					finalCustomer = customers.get(i);
				} else {
					finalCustomer = null;
					continue;
				}
			}
			
			if(customer.getCountry()!=null && !customer.getCountry().equals("")) {
				if(customer.getCountry().equals(customers.get(i).getCountry())) {
					finalCustomer = customers.get(i);
				} else {
					finalCustomer = null;
					continue;
				}
			}
			
			if(customer.getGender()!=null && !customer.getGender().equals("")) {
				if(customer.getGender().equals(customers.get(i).getGender())) {
					finalCustomer = customers.get(i);
				} else {
					finalCustomer = null;
					continue;
				}
			}
			
			if(finalCustomer!=null) {
				System.out.println("-> " + customers.get(i).getFirstName());
				finalCustomers.add(finalCustomer);
			}
		}
		//customerService.addCustomer(customer);
		return new ResponseEntity<>(finalCustomers, HttpStatus.OK);
    }

}
