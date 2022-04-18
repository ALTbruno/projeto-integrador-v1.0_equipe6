package com.pi.api.controller;

import com.pi.api.dto.CategoryDTO;
import com.pi.api.model.Category;
import com.pi.api.service.CategoryService;
import com.pi.api.service.S3Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private S3Service s3Service;

    @PostMapping("/add")
    public ResponseEntity<Category> cadastrar(@ModelAttribute CategoryDTO categoryDTO) throws IOException {
        return ResponseEntity.status(HttpStatus.CREATED).body(categoryService.salvar(categoryDTO));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Category>> buscarPorId(@PathVariable Long id) {
        if (categoryService.idExiste(id)) {
            return ResponseEntity.ok(categoryService.buscarPorId(id));
        }
        return ResponseEntity.badRequest().build();
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Category> atualizar(@PathVariable Long id, @ModelAttribute CategoryDTO categoryDTO) throws IOException {
        if (categoryService.idExiste(id)) {
            categoryDTO.setId(id);
            return ResponseEntity.ok(categoryService.atualizar(categoryDTO));
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping
    public ResponseEntity<Iterable<Category>> listar() {
        return ResponseEntity.ok(categoryService.listar());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {

        if (categoryService.idExiste(id)) {
            categoryService.excluir(id);
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.badRequest().build();
    }
}
