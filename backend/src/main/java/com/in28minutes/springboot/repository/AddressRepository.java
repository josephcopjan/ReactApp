package com.in28minutes.springboot.repository;

import com.in28minutes.springboot.model.Address;
import org.springframework.data.repository.CrudRepository;

public interface AddressRepository extends CrudRepository<Address, Long> {
}
