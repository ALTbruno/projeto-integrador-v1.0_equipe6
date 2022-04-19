package com.pi.api.controller;

import com.pi.api.dto.ImageDTO;
import com.pi.api.model.Image;
import com.pi.api.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/images")
public class ImageController {

	@Autowired
	private ImageService imageService;

	@PostMapping
	public List<Image> upload(ImageDTO imageDTO) throws IOException {
		return imageService.salvar(imageDTO);
	}
}
