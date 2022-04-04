package com.pi.api.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
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

	@NotBlank
	@Size(max = 1000)
	private String description;

//	@ManyToMany
//	@Fetch(FetchMode.JOIN)
//	@JoinTable(name = "PRODUCT_UNAVAILABLEDATES",
//			joinColumns = @JoinColumn(name = "product_id"),
//			inverseJoinColumns = @JoinColumn(name = "unavailabledate_id"))
//	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
//	private UnavailableDate date;

	@ManyToOne
	@JoinColumn(name = "id_category")
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private Category category;

	@ManyToOne
	@JoinColumn(name = "id_city")
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private City city;

	@OneToMany
//	@JoinColumn(name = "product_id")
	@Fetch(FetchMode.JOIN)
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private Set<Image> images;

	@ManyToMany
	@Fetch(FetchMode.JOIN)
	@JoinTable(name = "PRODUCT_CHARACTERISTIC",
			joinColumns = @JoinColumn(name = "product_id"),
			inverseJoinColumns = @JoinColumn(name = "characteristic_id"))
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private Set<Characteristic> characteristics;

	@NotBlank
	@Size(max = 1000)
	private String latitude;

	@NotBlank
	@Size(max = 1000)
	private String longitude;




	public Product() {
	}

//	public Product(String name, String description, Category category, City city, Set<LocalDate> unavailableDates) {
//		this.name = name;
//		this.description = description;
//		this.category = category;
//		this.city = city;
//		this.unavailableDates = unavailableDates;
//	}


	public Product(String name, String description, Category category, City city, String latitude, String longitude) {
		this.name = name;
		this.description = description;
		this.category = category;
		this.city = city;
		this.latitude = latitude;
		this.longitude = longitude;
	}

	public String getLatitude() {
		return latitude;
	}

	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	public String getLongitude() {
		return longitude;
	}

	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
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
//
//	public UnavailableDate getUnavailableDate() {
//		return date;
//	}
//
//	public void setUnavailableDates(UnavailableDate date) {
//		this.date = date;
//	}
}
