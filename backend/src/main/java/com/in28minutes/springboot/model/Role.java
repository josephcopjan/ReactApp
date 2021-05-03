package com.in28minutes.springboot.model;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

@EntityListeners(AuditingEntityListener.class)
@Entity
@Table(name = "roles")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private ERole name;

    private String description;
    private Date createdDate;

    public Role(Long id, ERole name, String description, Date createdDate) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.createdDate = createdDate;
    }

    public Role(ERole name, String description, Date createdDate) {
        this.name = name;
        this.description = description;
        this.createdDate = createdDate;
    }

    public Role() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public ERole getName() {
        return name;
    }

    public void setName(ERole name) {
        this.name = name;
    }
}
