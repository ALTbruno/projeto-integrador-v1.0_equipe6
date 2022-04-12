package com.pi.api.controller;

import com.pi.api.model.Product;
import com.pi.api.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/products")
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
    public ResponseEntity<Page<Product>> listar(Pageable pageable) {
        return ResponseEntity.ok(productService.listar(pageable));
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
    public ResponseEntity<Page<Product>> buscarPorCategoria(@PathVariable String categoryTitle, Pageable pageable) {
        return ResponseEntity.ok(productService.listarPorCategoria(categoryTitle, pageable));
    }

    @GetMapping("/city={cityName}")
    public ResponseEntity<Page<Product>> buscarPorCidade(@PathVariable String cityName, Pageable pageable) {
        return ResponseEntity.ok(productService.listarPorCidade(cityName, pageable));
    }

    @GetMapping("/search")
    public ResponseEntity<Page<Product>> listarPorCidadeEDatasDisponiveis(@RequestParam String city, @RequestParam String checkin, @RequestParam String checkout, Pageable pageable) {
        return ResponseEntity.ok(productService.listarPorCidadeEDatasDisponiveis(city, checkin, checkout, pageable));
    }
}
