package com.in28minutes.springboot.model;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

@EntityListeners(AuditingEntityListener.class)
@Entity
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String firstName;
    private String lastName;
    private Long cntrId;
    private Date birthDate;
    private boolean internal;
    private String gender;


    @OneToOne(fetch = FetchType.LAZY)
    private Address address;

    protected Student() {}

    public Student(String firstName, String lastName, Address address, Long cntrId, Date birthDate, boolean internal, String gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.cntrId = cntrId;
        this.birthDate = birthDate;
        this.internal = internal;
        this.gender = gender;
    }

    @Override
    public String toString() {
        return String.format(
                "Student[id=%d, firstName='%s', lastName='%s']",
                id, firstName, lastName);
    }

    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Long getCntrId() {
        return cntrId;
    }

    public void setCntrId(Long cntrId) {
        this.cntrId = cntrId;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public boolean isInternal() {
        return internal;
    }

    public void setInternal(boolean internal) {
        this.internal = internal;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
}