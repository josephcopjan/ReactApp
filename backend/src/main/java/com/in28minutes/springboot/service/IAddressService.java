package com.in28minutes.springboot.service;

import com.in28minutes.springboot.model.Address;
import com.in28minutes.springboot.model.Country;

import java.util.List;

public interface IAddressService {
    public abstract List<Address> getAddresses();
}
