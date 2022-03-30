package com.pi.api.controller;

import com.pi.api.entity.Product;
import com.pi.api.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "")
@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/add")
    public ResponseEntity<Product> cadastrar(@RequestBody Product product) {
        return ResponseEntity.status(HttpStatus.CREATED).body(productService.salvar(product));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Product>> buscarPorId(@PathVariable Long id) {

        if (productService.idExiste(id)) {
            return ResponseEntity.ok(productService.buscarPorId(id));
        }

        return ResponseEntity.badRequest().build();
    }

    @GetMapping
    public ResponseEntity<Iterable<Product>> buscarTodos() {
        return ResponseEntity.ok(productService.buscarTodos());
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Product> atualizar(@PathVariable Long id, @RequestBody Product product) {

        if (productService.idExiste(id)) {
            product.setId(id);
            return ResponseEntity.ok(productService.atualizar(product));
        }

        return ResponseEntity.badRequest().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {

        if (productService.idExiste(id)) {
            productService.excluir(id);
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/category={categoryTitle}")
    public ResponseEntity<List<Product>> buscarPorCategoria(@PathVariable String categoryTitle) {
        return ResponseEntity.ok(productService.listarPorCategoria(categoryTitle));
    }

    @GetMapping("/city={cityName}")
    public ResponseEntity<List<Product>> buscarPorCidade(@PathVariable String cityName) {
        return ResponseEntity.ok(productService.listarPorCidade(cityName));
    }

}
