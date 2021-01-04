package com.in28minutes.springboot.repository;

import com.in28minutes.springboot.model.Country;
import org.springframework.data.repository.CrudRepository;

public interface CountryRepository extends CrudRepository<Country, Long>  {

}
