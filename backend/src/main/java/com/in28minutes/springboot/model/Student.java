package com.in28minutes.springboot.model;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

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
    private Date registrationDate;
    private boolean internal;
    private String gender;

    @ManyToMany
    @JoinTable(
            name = "student_subject",
            joinColumns = @JoinColumn(name = "student_id"),
            inverseJoinColumns = @JoinColumn(name = "subject_id"))
    Set<Subject> subjects;


    @OneToOne(fetch = FetchType.EAGER)
    private Address address;


    protected Student() {}

    public Student(String firstName, String lastName, Address address, Long cntrId, Date birthDate, Date registrationDate, boolean internal, String gender, Set<Subject> subjects) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.cntrId = cntrId;
        this.birthDate = birthDate;
        this.registrationDate = registrationDate;
        this.internal = internal;
        this.gender = gender;
        this.subjects = subjects;
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

    public Set<Subject> getSubjects() {
        return subjects;
    }

    public void setSubjects(Set<Subject> subjects) {
        this.subjects = subjects;
    }

    public Date getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(Date registrationDate) {
        this.registrationDate = registrationDate;
    }
}