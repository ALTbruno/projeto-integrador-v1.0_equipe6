package com.pi.api.service;

import com.pi.api.model.Category;
import com.pi.api.repository.CategoryRepository;
import com.pi.api.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

	@Autowired
	private CategoryRepository categoryRepository;

	@Autowired
	private ProductRepository productRepository;

	public Category salvar(Category category) {
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
