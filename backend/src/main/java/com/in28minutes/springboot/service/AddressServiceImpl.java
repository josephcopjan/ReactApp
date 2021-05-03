package com.in28minutes.springboot.service;

import com.in28minutes.springboot.model.Address;
import com.in28minutes.springboot.model.Country;
import com.in28minutes.springboot.model.Student;
import com.in28minutes.springboot.repository.AddressRepository;
import com.in28minutes.springboot.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class AddressServiceImpl implements IAddressService{

    @Autowired
    AddressRepository addressRepository;

    @Override
    public List<Address> getAddresses() {
        List<Address> result =
                StreamSupport.stream(addressRepository.findAll().spliterator(), false)
                        .collect(Collectors.toList());
        return result;
    }

    @Override
    public void updateAddress(Address address) {
        addressRepository.save(address);
    }
}
