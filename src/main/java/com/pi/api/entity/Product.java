package com.pi.api.entity;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "products")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	@Size(max = 255)
	private String name;

	@NotBlank
	@Size(max = 255)
	private String description;

	@ManyToOne
	@JoinColumn(name = "id_category")
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private Category category;

	@ManyToOne
	@JoinColumn(name = "id_city")
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private City city;

	@OneToMany
	@JoinColumn(name = "image_id")
	@Fetch(FetchMode.JOIN)
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private Set<Image> images;

//	@OneToMany(mappedBy ="products", cascade = CascadeType.ALL)
//	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
//	private Set<Reservation> reservation = new HashSet<>();

	@ManyToMany
	@Fetch(FetchMode.JOIN)
	@JoinTable(name = "PRODUCT_CHARACTERISTIC",
			joinColumns = @JoinColumn(name = "product_id"),
			inverseJoinColumns = @JoinColumn(name = "characteristic_id"))
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private Set<Characteristic> characteristics;




	public Product() {
	}

//	public Product(String name, String description, Category category, City city, Image image) {
//		this.name = name;
//		this.description = description;
//		this.category = category;
//		this.city = city;
//		this.image = image;
//	}

	public Product(String name, String description, Category category, City city) {
		this.name = name;
		this.description = description;
		this.category = category;
		this.city = city;
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
}
