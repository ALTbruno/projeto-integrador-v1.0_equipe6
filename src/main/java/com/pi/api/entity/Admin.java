package com.pi.api.entity;


import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;

@Entity
@Table(name = "ADMINS")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class Admin extends User {

	public Admin() {
	}
}
