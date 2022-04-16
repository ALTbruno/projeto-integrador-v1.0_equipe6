package com.pi.api.service;

import com.pi.api.model.Category;
import com.pi.api.repository.CategoryRepository;
import com.pi.api.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

	@Autowired
	private CategoryRepository categoryRepository;

	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private S3Service s3Service;

	@Value("${mainDirectory}")
	private String mainDirectory;

	public Category salvar(Category category, MultipartFile imageFile) throws IOException {

		List<String> allowedFileTypes = Arrays.asList(".jpeg", ".jpg", ".png");
		if (allowedFileTypes.stream().noneMatch(type -> imageFile.getOriginalFilename().toLowerCase().endsWith(type))) throw new IOException("A imagem deve ser do formato JPEG, JPG ou PNG");

		String directory = mainDirectory + "images/" + "categories/";
		String url = s3Service.uploadFileTos3bucket(directory, imageFile);
		category.setImageUrl(url);
		return categoryRepository.save(category);
	}

	public boolean idExiste(Long id) {
		return categoryRepository.existsById(id);
	}

	public Category atualizar(Category category) {
		return categoryRepository.save(category);
	}

	public Optional<Category> buscarPorId(Long id) {
		return categoryRepository.findById(id);
	}

	public List<Category> listar() {
		List<Category> categories = categoryRepository.findAll();

		for (Category category : categories) {
			category.setTotalProducts(productRepository.countProductByCategoryId(category.getId()));
		}

		return categories;
	}

	public void excluir(Long id) {
			categoryRepository.deleteById(id);
	}

}
