package com.pi.api.controller;

import com.pi.api.model.Category;
import com.pi.api.service.CategoryService;
import com.pi.api.service.S3Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    @Value("${endpointUrl}")
    private String endpointUrl;

    @Value("${bucketName}")
    private String bucketName;

    @Value("${mainDirectory}")
    private String mainDirectory;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private S3Service s3Service;

    @PostMapping("/add")
    public ResponseEntity<Category> cadastrar(@ModelAttribute Category category, @RequestPart MultipartFile imageFile) throws IOException {
        return ResponseEntity.status(HttpStatus.CREATED).body(categoryService.salvar(category, imageFile));
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
