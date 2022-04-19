package com.pi.api.service;

import com.pi.api.dto.ImageDTO;
import com.pi.api.model.Image;
import com.pi.api.repository.ImageRepository;
import com.pi.api.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class ImageService {

	@Autowired
	private ImageRepository imageRepository;

	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private S3Service s3Service;

	@Value("${mainPath}")
	private String mainPath;

	public List<Image> salvar(ImageDTO imageDTO) throws IOException {

		String fullPath = mainPath + "images/" + "products/";
		MultipartFile[] images = imageDTO.getFiles();

		List<Image> savedImages = new ArrayList<>();

		for (MultipartFile img : images) {
			List<String> allowedFileTypes = Arrays.asList(".jpeg", ".jpg", ".png");
			String imgTitle = img.getOriginalFilename();
			if (allowedFileTypes.stream().noneMatch(type -> imgTitle.toLowerCase().endsWith(type))) throw new IOException("A imagem deve ser do formato JPEG, JPG ou PNG");

			Image image = new Image();
			String url = s3Service.uploadFileTos3bucket(fullPath, img);
			image.setTitle(imgTitle);
			image.setUrl(url);
			image.setProduct(productRepository.findById(imageDTO.getProductId()).get());
			imageRepository.save(image);
			savedImages.add(image);
		}

		return savedImages;
	}

}
