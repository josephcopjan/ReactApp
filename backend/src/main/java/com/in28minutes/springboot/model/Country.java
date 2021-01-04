package com.in28minutes.springboot.model;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@EntityListeners(AuditingEntityListener.class)
@Entity
public class Country {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    private String shortName;
    private String country;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getShortName() {
        return shortName;
    }

    public void setShortName(String shortName) {
        this.shortName = shortName;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public Country(int id, String shortName, String country) {
        this.id = id;
        this.shortName = shortName;
        this.country = country;
    }

    public Country(String shortName, String country) {
        this.shortName = shortName;
        this.country = country;
    }

    protected Country() {}
}
