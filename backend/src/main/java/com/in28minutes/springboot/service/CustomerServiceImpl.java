package com.in28minutes.springboot.service;

import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import org.springframework.stereotype.Service;
import com.in28minutes.springboot.model.Address;
import com.in28minutes.springboot.model.Customer;
import com.in28minutes.springboot.model.Skills;

@Service
public class CustomerServiceImpl implements CustomerService{

	private static Map<Integer, Customer> customerRepo = new HashMap<>();
	static {
		Address address = new Address(null, "Stara Lubovna", "Letna", 22, "06401");
		Skills skills = new Skills();
		skills.setAngular(true);
		skills.setReact(true);

		
	    Customer customer = new Customer(0, address, new Date(), "Joseph", "Raegan", "Ing", "male", "Slovakia",skills );
	    Customer customer2 = new Customer(1, address, new Date(), "Dominka", "Conan", "Mgr", "female","USA", skills );
	    Customer customer3 = new Customer(2, address, new Date(), "Igor", "Spielberg", "Mgr", "female","Germany", skills );
	    Customer customer4 = new Customer(3, address, new Date(), "Harold", "Smiths", "Mgr", "female","UK", skills );
	    Customer customer5 = new Customer(4, address, new Date(), "Martin", "Dafoe", "Mgr", "female","France", skills );
	    customerRepo.put(customer.getId(), customer);
	    customerRepo.put(customer2.getId(), customer2);
	    customerRepo.put(customer3.getId(), customer3);
	    customerRepo.put(customer4.getId(), customer4);
	    customerRepo.put(customer5.getId(), customer5);

	}
	   
	@Override
	public void addCustomer(Customer customer) {
		int newIndex = (getCurrentIndex()+1);
		System.out.println("test");
		customer.setId(newIndex);
		System.out.println("newIndex " + newIndex);
		customerRepo.put(newIndex, customer);
		System.out.println("addCustomer");
		
	}

	@Override
	public void updateCustomer(int id, Customer customer) {
		System.out.println("updateCustomer");
		
	}

	@Override
	public void deleteCustomer(int id) {
		System.out.println("deleteCustomer");
		
	}

	@Override
	public Collection<Customer> getCustomers() {
		System.out.println("getCustomers");
		return customerRepo.values();
	}

	@Override
	public Customer getCustomer(String id) {
		System.out.println("getCustomer with ID " + id);
		Customer customer = (Customer)customerRepo.get(Integer.parseInt(id));
		return customer;
	}
	
	public int getCurrentIndex() {
		int currentIndex =0;
		
		for(int i=0;i<customerRepo.size();i++) {
			System.out.println("---> " + currentIndex);
			currentIndex = customerRepo.get(i).getId();
		}
		
		return currentIndex;
	}

}
