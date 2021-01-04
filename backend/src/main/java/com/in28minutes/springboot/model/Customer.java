package com.in28minutes.springboot.model;

import java.util.Date;
import java.util.List;

public class Customer {
	
	private int id;
	private Address address;
	private Date dateOfBirth;
	private Date dateFrom;
	private Date dateTo;
	private String firstName;
	private String lastName;
	private String title;
	private String gender;
	private String country;
	private Skills skills;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	public Date getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public Skills getSkills() {
		return skills;
	}
	public void setSkills(Skills skills) {
		this.skills = skills;
	}
	public Date getDateFrom() {
		return dateFrom;
	}
	public void setDateFrom(Date dateFrom) {
		this.dateFrom = dateFrom;
	}
	public Date getDateTo() {
		return dateTo;
	}
	public void setDateTo(Date dateTo) {
		this.dateTo = dateTo;
	}
	
	public Customer(int id, Address address, Date dateOfBirth, String firstName, String lastName, String title, String gender, String country,
			Skills skills) {
		super();
		this.id = id;
		this.address = address;
		this.dateOfBirth = dateOfBirth;
		this.firstName = firstName;
		this.lastName = lastName;
		this.title = title;
		this.gender = gender;
		this.country = country;
		this.skills = skills;
	}
	
	

}
