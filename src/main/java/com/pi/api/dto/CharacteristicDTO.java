package com.pi.api.dto;

import com.pi.api.model.Characteristic;
import org.springframework.web.multipart.MultipartFile;

public class CharacteristicDTO {

	private Long id;
	private String name;
	private MultipartFile image;

	public CharacteristicDTO() {
	}

	public CharacteristicDTO(Long id, String name, MultipartFile image) {
		this.id = id;
		this.name = name;
		this.image = image;
	}

	public CharacteristicDTO(Characteristic characteristic) {
		this.id = characteristic.getId();
		this.name = characteristic.getName();
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

	public MultipartFile getImage() {
		return image;
	}

	public void setImage(MultipartFile image) {
		this.image = image;
	}
}
