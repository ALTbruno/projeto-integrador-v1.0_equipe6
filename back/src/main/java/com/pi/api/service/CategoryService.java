package com.pi.api.service;

import com.pi.api.entity.Category;
import com.pi.api.repository.CategoryRepository;
import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

	@Autowired
	private CategoryRepository categoryRepository;

	public Category salvar(Category category) {
		return categoryRepository.save(category);
	}

	public boolean idExiste(Long id) {
		return categoryRepository.existsById(id);
	}

	public ResponseEntity<Category> atualizar(Category category){

		ResponseEntity<Category> response;

		if (idExiste(category.getId())) {
			response = ResponseEntity.status(HttpStatus.OK).body(categoryRepository.save(category));
		} else {
			response = ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}

		return response; //NAO USAR RESPONSE ENTITY NO SERVICE
	}

	public Optional<Category> buscarPorId(Long id) {

		return categoryRepository.findById(id);
	}

	public List<Category> buscarTodos() {
		return categoryRepository.findAll();
	}

	public void excluir(Long id) {

		if (idExiste(id)) {
			categoryRepository.deleteById(id);
		}
	}

}
