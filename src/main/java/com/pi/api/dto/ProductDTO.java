package com.pi.api.dto;

import com.pi.api.model.Characteristic;
import com.pi.api.model.Product;
import org.springframework.web.multipart.MultipartFile;

import java.util.Set;
import java.util.stream.Collectors;

public class ProductDTO {

	private Long id;
	private String name;
	private Double latitude;
	private Double longitude;
	private String description;
	private String rules;
	private String healthAndSafety;
	private String cancellationPolicy;
	private Long categoryId;
	private Long cityId;
	private Set<Long> characteristics;
	private MultipartFile[] images;

	public ProductDTO() {
	}

	public ProductDTO(Long id, String name, Double latitude, Double longitude, String description, String rules, String healthAndSafety, String cancellationPolicy, Long categoryId, Long cityId, Set<Long> characteristics, MultipartFile[] images) {
		this.id = id;
		this.name = name;
		this.latitude = latitude;
		this.longitude = longitude;
		this.description = description;
		this.rules = rules;
		this.healthAndSafety = healthAndSafety;
		this.cancellationPolicy = cancellationPolicy;
		this.categoryId = categoryId;
		this.cityId = cityId;
		this.characteristics = characteristics;
		this.images = images;
	}

	public ProductDTO(Product product) {
		this.id = product.getId();
		this.name = product.getName();
		this.latitude = product.getLatitude();
		this.longitude = product.getLongitude();
		this.description = product.getDescription();
		this.rules = product.getRules();
		this.healthAndSafety = product.getHealthAndSafety();
		this.cancellationPolicy = product.getCancellationPolicy();
		this.categoryId = product.getCategory().getId();
		this.cityId = product.getCity().getId();
		this.characteristics = product.getCharacteristics().stream().map(Characteristic::getId).collect(Collectors.toSet());
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

	public Double getLatitude() {
		return latitude;
	}

	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}

	public Double getLongitude() {
		return longitude;
	}

	public void setLongitude(Double longitude) {
		this.longitude = longitude;
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

	public Long getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(Long categoryId) {
		this.categoryId = categoryId;
	}

	public Long getCityId() {
		return cityId;
	}

	public void setCityId(Long cityId) {
		this.cityId = cityId;
	}

	public Set<Long> getCharacteristics() {
		return characteristics;
	}

	public void setCharacteristics(Set<Long> characteristics) {
		this.characteristics = characteristics;
	}

	public MultipartFile[] getImages() {
		return images;
	}

	public void setImages(MultipartFile[] images) {
		this.images = images;
	}
}
