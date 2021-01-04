package com.in28minutes.springboot.model;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.*;

@EntityListeners(AuditingEntityListener.class)
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private boolean disabled;
    private String firstName;
    private String lastName;
    private String userName;
    private Date createdDate;

    @OneToMany(fetch = FetchType.LAZY, targetEntity = Role.class)
    private List<Role> role;

    public User(boolean disabled, String firstName, String lastName, String userName, Date createdDate, List<Role> role) {
        this.disabled = disabled;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.createdDate = createdDate;
        this.role = role;
    }

    public User(Long id, boolean disabled, String firstName, String lastName, String userName, Date createdDate, List<Role> role) {
        this.id = id;
        this.disabled = disabled;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.createdDate = createdDate;
        this.role = role;
    }

    public User() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isDisabled() {
        return disabled;
    }

    public void setDisabled(boolean disabled) {
        this.disabled = disabled;
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

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public List<Role> getRole() {
        return role;
    }

    public void setRole(List<Role> role) {
        this.role = role;
    }
}
