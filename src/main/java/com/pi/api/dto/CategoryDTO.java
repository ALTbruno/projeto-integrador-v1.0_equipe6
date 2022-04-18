package com.pi.api.dto;

import com.pi.api.model.Category;
import org.springframework.web.multipart.MultipartFile;

public class CategoryDTO {

	private Long id;
	private String title;
	private String description;
	private MultipartFile image;

	public CategoryDTO() {
	}

	public CategoryDTO(Long id, String title, String description, MultipartFile image) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.image = image;
	}

	public CategoryDTO(Category category) {
		this.id = category.getId();
		this.title = category.getTitle();
		this.description = category.getDescription();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public MultipartFile getImage() {
		return image;
	}

	public void setImage(MultipartFile image) {
		this.image = image;
	}
}
