package com.pi.api.dto;

import com.pi.api.model.Image;
import org.springframework.web.multipart.MultipartFile;

public class ImageDTO {

	private Long id;
	private Long productId;
	private MultipartFile[] files;

	public ImageDTO() {
	}

	public ImageDTO(Long id, Long productId, MultipartFile[] files) {
		this.id = id;
		this.productId = productId;
		this.files = files;
	}

	public ImageDTO(Image image) {
		this.id = image.getId();
		this.productId = image.getProduct().getId();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public MultipartFile[] getFiles() {
		return files;
	}

	public void setFiles(MultipartFile[] files) {
		this.files = files;
	}

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}
}
