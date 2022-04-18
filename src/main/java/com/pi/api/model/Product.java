package com.pi.api.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.util.Set;

@Entity
@Table(name = "PRODUCTS")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	@Size(max = 255)
	private String name;

	@NotNull
	private double latitude;

	@NotNull
	private double longitude;

	private double score;

	@NotBlank
	@Size(max = 1000)
	private String description;

	@NotBlank
	@Size(max = 1000)
	private String rules;

	@NotBlank
	@Size(max = 1000)
	private String healthAndSafety;

	@NotBlank
	@Size(max = 1000)
	private String cancellationPolicy;

	@ManyToOne
	@JoinColumn(name = "id_category")
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private Category category;

	@ManyToOne
	@JoinColumn(name = "id_city")
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private City city;

	@OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private Set<Image> images;

	@ManyToMany
	@Fetch(FetchMode.JOIN)
	@JoinTable(name = "PRODUCT_CHARACTERISTIC",
			joinColumns = @JoinColumn(name = "product_id"),
			inverseJoinColumns = @JoinColumn(name = "characteristic_id"))
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private Set<Characteristic> characteristics;


	public Product() {
	}

	public Product(String name, double latitude, double longitude, double score, String description, String rules, String healthAndSafety, String cancellationPolicy, Category category, City city) {
		this.name = name;
		this.latitude = latitude;
		this.longitude = longitude;
		this.score = score;
		this.description = description;
		this.rules = rules;
		this.healthAndSafety = healthAndSafety;
		this.cancellationPolicy = cancellationPolicy;
		this.category = category;
		this.city = city;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getLatitude() {
		return latitude;
	}

	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}

	public double getLongitude() {
		return longitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}

	public double getScore() {
		return score;
	}

	public void setScore(double score) {
		this.score = score;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getRules() {
		return rules;
	}

	public void setRules(String rules) {
		this.rules = rules;
	}

	public String getHealthAndSafety() {
		return healthAndSafety;
	}

	public void setHealthAndSafety(String healthAndSafety) {
		this.healthAndSafety = healthAndSafety;
	}

	public String getCancellationPolicy() {
		return cancellationPolicy;
	}

	public void setCancellationPolicy(String cancellationPolicy) {
		this.cancellationPolicy = cancellationPolicy;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public City getCity() {
		return city;
	}

	public void setCity(City city) {
		this.city = city;
	}

	public Set<Image> getImages() {
		return images;
	}

	public void setImages(Set<Image> images) {
		this.images = images;
	}

	public Set<Characteristic> getCharacteristics() {
		return characteristics;
	}

	public void setCharacteristics(Set<Characteristic> characteristics) {
		this.characteristics = characteristics;
	}
}
