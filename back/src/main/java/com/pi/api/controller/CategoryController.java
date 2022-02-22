package com.pi.api.controller;


import com.pi.api.entity.Category;
import com.pi.api.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "")
@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping()
    public ResponseEntity<Category> cadastrar(@RequestBody Category category) {
        return ResponseEntity.ok(categoryService.salvar(category));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Category> buscarPorId(@PathVariable Integer id) {
        return ResponseEntity.ok(categoryService.buscarPorId(id).orElse(null));
    }

    @PutMapping
    public ResponseEntity<Category> atualizar(@RequestBody Category categoria) {
        ResponseEntity<Category> response = null;
        if (categoria.getId() != null && categoryService.buscarPorId(categoria.getId()).isPresent())
            response = ResponseEntity.ok(categoryService.atualizar(categoria));
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        return response;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> excluir(@PathVariable Integer id) {
        ResponseEntity<String> response = null;
        if (categoryService.buscarPorId(id).isPresent()) {
            categoryService.excluir(id);
            response = ResponseEntity.status(HttpStatus.NO_CONTENT).body("Categoria excluída");
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }

    @GetMapping
    public ResponseEntity<Iterable<Category>> buscarTodos() {
        return ResponseEntity.ok(categoryService.buscarTodos());
    }
}
