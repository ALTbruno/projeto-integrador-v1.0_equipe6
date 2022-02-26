package com.pi.api.controller;

import com.pi.api.entity.Category;
import com.pi.api.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "")
@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping()
    public ResponseEntity<Category> cadastrar(@RequestBody Category category) {
        return ResponseEntity.status(HttpStatus.CREATED).body(categoryService.salvar(category));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Category>> buscarPorId(@PathVariable Long id) {
        return ResponseEntity.ok(categoryService.buscarPorId(id));
    }

    @PutMapping
    public ResponseEntity<Category> atualizar(@RequestBody Category categoria) {
        return categoryService.atualizar(categoria);
    }

    @GetMapping
    public ResponseEntity<Iterable<Category>> buscarTodos() {
        return ResponseEntity.ok(categoryService.buscarTodos());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {

        if (categoryService.buscarPorId(id).isPresent()) {
            categoryService.excluir(id);
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.badRequest().build();
    }
}
