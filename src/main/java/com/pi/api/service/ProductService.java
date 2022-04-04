package com.pi.api.service;

import com.pi.api.model.Product;
import com.pi.api.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public List<Product> listar() {
        return productRepository.findAll();
    }

    public void excluir(Long id) {
        productRepository.deleteById(id);
    }

    public List<Product> listarPorCategoria(String categoryTitle) {
        return productRepository.findByCategoryTitleContainingIgnoreCase(categoryTitle);
    }

    public List<Product> listarPorCidade(String cityName) {
        return productRepository.findByCityNameContainingIgnoreCase(cityName);
    }

    public Long contarProdutosPorCategoria(Long id) {
        return productRepository.countProductByCategoryId(id);
    }

}
