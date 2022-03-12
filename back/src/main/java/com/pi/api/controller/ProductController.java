package com.pi.api.controller;


import com.pi.api.entity.Product;
import com.pi.api.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "")
@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping()
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

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {

        if (productService.idExiste(id)) {
            productService.excluir(id);
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/{nomeCategoria}")
    public ResponseEntity<List<Product>> buscarCategoria(@PathVariable("nomeCategoria") String nomeCategoria) {
        return ResponseEntity.ok(productService.findByCategory(nomeCategoria));
    }

    @GetMapping("/{nomeCcidade}")
    public ResponseEntity<List<Product>> buscarCidade(@PathVariable("nomeCidade") String nomeCidade) {
        return ResponseEntity.ok(productService.findByCity(nomeCidade));
    }




}
