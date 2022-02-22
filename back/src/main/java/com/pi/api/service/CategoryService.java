package com.pi.api.service;

import com.pi.api.entity.Category;
import com.pi.api.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public Category salvar(Category category) {
        return categoryRepository.save(category);
    }

    public Category atualizar(Category category){
        return categoryRepository.save(category);
    }

    public void excluir(Integer id) {
        categoryRepository.deleteById(id);
    }

    public Optional<Category> buscarPorId(Integer id) {
        return categoryRepository.findById(id);
    }

    public List<Category> buscarTodos() {
        return categoryRepository.findAll();
    }


}
