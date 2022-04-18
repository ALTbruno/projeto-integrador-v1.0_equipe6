package com.pi.api.service;

import com.pi.api.model.Image;
import com.pi.api.model.Product;
import com.pi.api.repository.ImageRepository;
import com.pi.api.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ImageRepository imageRepository;

    @Autowired
    private S3Service s3Service;

    @Value("${mainDirectory}")
    private String mainDirectory;

    public Product salvar(Product product, MultipartFile[] imageFiles) throws IOException {
        String directory = mainDirectory + "images/" + "products/";
        productRepository.save(product);

        for (MultipartFile img : imageFiles) {
            Image image = new Image();
            String url = s3Service.uploadFileTos3bucket(directory, img);
            image.setTitle(img.getOriginalFilename());
            image.setUrl(url);
            image.setProduct(product);
            imageRepository.save(image);
        }

        return product;
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
