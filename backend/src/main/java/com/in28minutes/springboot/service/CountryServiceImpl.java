package com.in28minutes.springboot.service;

import com.in28minutes.springboot.model.Country;
import com.in28minutes.springboot.model.Student;
import com.in28minutes.springboot.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class CountryServiceImpl implements CountryService{

    @Autowired
    CountryRepository countryRepository;

    @Override
    public void saveCountry(String shortName, String country) {
        countryRepository.save(new Country(shortName, country));
    }

    @Override
    public List<Country> getCountries() {
        List<Country> result =
                StreamSupport.stream(countryRepository.findAll().spliterator(), false)
                        .collect(Collectors.toList());
        return result;
    }
}
