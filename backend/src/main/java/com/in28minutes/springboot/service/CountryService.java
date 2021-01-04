package com.in28minutes.springboot.service;

import com.in28minutes.springboot.model.Country;
import com.in28minutes.springboot.model.Customer;

import java.util.List;

public interface CountryService {
    public abstract void saveCountry(String shortName, String country);
    public abstract List<Country> getCountries();
}
