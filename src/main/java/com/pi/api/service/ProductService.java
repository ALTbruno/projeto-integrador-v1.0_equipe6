package com.pi.api.service;

import com.pi.api.model.Product;
import com.pi.api.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

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

    public Page<Product> listar(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    public void excluir(Long id) {
        productRepository.deleteById(id);
    }

    public Page<Product> listarPorCategoria(String categoryTitle, Pageable pageable) {
        return productRepository.findByCategoryTitleContainingIgnoreCase(categoryTitle, pageable);
    }

    public Page<Product> listarPorCidade(String cityName, Pageable pageable) {
        return productRepository.findByCityNameContainingIgnoreCase(cityName, pageable);
    }

    public Long contarProdutosPorCategoria(Long id) {
        return productRepository.countProductByCategoryId(id);
    }

    public Page<Product> listarPorCidadeEDatasDisponiveis(String cityName, String checkinDate, String checkoutDate, Pageable pageable) {
        return productRepository.buscarPorCidadeEDatasDisponiveis(cityName, checkinDate, checkoutDate, pageable);
    }
}
