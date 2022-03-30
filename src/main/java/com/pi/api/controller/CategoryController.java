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
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping("/add")
    public ResponseEntity<Category> cadastrar(@RequestBody Category category) {
        return ResponseEntity.status(HttpStatus.CREATED).body(categoryService.salvar(category));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Category>> buscarPorId(@PathVariable Long id) {

        if (categoryService.idExiste(id)) {
            return ResponseEntity.ok(categoryService.buscarPorId(id));
        }

        return ResponseEntity.badRequest().build();
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Category> atualizar(@PathVariable Long id, @RequestBody Category category) {

        if (categoryService.idExiste(id)) {
            category.setId(id);
            return ResponseEntity.ok(categoryService.atualizar(category));
        }

        return ResponseEntity.badRequest().build();
    }

    @GetMapping
    public ResponseEntity<Iterable<Category>> buscarTodos() {
        return ResponseEntity.ok(categoryService.buscarTodos());
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
