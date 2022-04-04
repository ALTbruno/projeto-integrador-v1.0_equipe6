package com.pi.api.model;


import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;

@Entity
@Table(name = "CUSTOMERS")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class Customer extends User {

	public Customer() {
	}
}
