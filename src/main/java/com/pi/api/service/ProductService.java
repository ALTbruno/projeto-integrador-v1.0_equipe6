package com.pi.api.service;

import com.pi.api.entity.Product;
import com.pi.api.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product salvar(Product product) {
        return productRepository.save(product);
    }

    public boolean idExiste(Long id) {
        return productRepository.existsById(id);
    }

    public Product atualizar(Product product) {
        return productRepository.save(product);
    }

    public Optional<Product> buscarPorId(Long id) {
        return productRepository.findById(id);
    }

    public List<Product> buscarTodos() {
        return productRepository.findAll();
    }

    public void excluir(Long id) {
        productRepository.deleteById(id);
    }

    public List<Product> findByCategory(String nomeCategoria){

        List<Product> categoria = new ArrayList<>();

        for (Product product :
                productRepository.findAll()) {
            if (product.getCategory().equals(nomeCategoria)) {
                categoria.add(product);
            }
        }
        return categoria;
    }

    public List<Product> findByCity(String nomeCidade){

        List<Product> cidade = new ArrayList<>();

        for (Product product :
                productRepository.findAll()) {
            if (product.getCity().getName().equalsIgnoreCase(nomeCidade)) {
                cidade.add(product);
            }
        }
        return cidade;
    }
}
