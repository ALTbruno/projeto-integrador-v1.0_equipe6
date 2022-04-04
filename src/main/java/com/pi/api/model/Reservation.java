package com.pi.api.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Time;
import java.time.LocalDate;

@Entity
@Table(name = "RESERVATIONS")
public class Reservation {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotNull
	private Time checkinTime;

	@NotNull
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate checkinDate;

	@NotNull
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate checkoutDate;

	@ManyToOne
	@JoinColumn(name = "id_customer")
	private Customer customer;

	@ManyToOne
	@JoinColumn(name = "id_product")
	private Product product;


	public Reservation() {
	}

	public Reservation(Time checkinTime, LocalDate checkinDate, LocalDate checkoutDate, Customer customer, Product product) {
		this.checkinTime = checkinTime;
		this.checkinDate = checkinDate;
		this.checkoutDate = checkoutDate;
		this.customer = customer;
		this.product = product;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Time getCheckinTime() {
		return checkinTime;
	}

	public void setCheckinTime(Time checkinTime) {
		this.checkinTime = checkinTime;
	}

	public LocalDate getCheckinDate() {
		return checkinDate;
	}

	public void setCheckinDate(LocalDate checkinDate) {
		this.checkinDate = checkinDate;
	}

	public LocalDate getCheckoutDate() {
		return checkoutDate;
	}

	public void setCheckoutDate(LocalDate checkoutDate) {
		this.checkoutDate = checkoutDate;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}
}
