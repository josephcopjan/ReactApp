package com.in28minutes.springboot.service;

import java.util.Collection;
import com.in28minutes.springboot.model.Customer;

public interface CustomerService {
	public abstract void addCustomer(Customer customer);
    public abstract void updateCustomer(int id, Customer customer);
	public abstract void deleteCustomer(int id);
	public abstract Collection<Customer> getCustomers();
	public abstract Customer getCustomer(String id);
}
