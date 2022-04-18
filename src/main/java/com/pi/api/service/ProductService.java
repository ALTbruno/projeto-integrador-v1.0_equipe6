package com.pi.api.service;

import com.pi.api.dto.ProductDTO;
import com.pi.api.model.Characteristic;
import com.pi.api.model.Image;
import com.pi.api.model.Product;
import com.pi.api.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ImageRepository imageRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private CityRepository cityRepository;

    @Autowired
    private CharacteristicRepository characteristicRepository;

    @Autowired
    private S3Service s3Service;

    @Value("${mainPath}")
    private String mainPath;

    public Product salvar(ProductDTO productDTO) throws IOException {

        Product product = new Product();
        product.setName(productDTO.getName());
        product.setLatitude(productDTO.getLatitude());
        product.setLongitude(productDTO.getLongitude());
        product.setDescription(productDTO.getDescription());
        product.setRules(productDTO.getRules());
        product.setHealthAndSafety(productDTO.getHealthAndSafety());
        product.setCancellationPolicy(productDTO.getCancellationPolicy());
        product.setCategory(categoryRepository.findById(productDTO.getCategoryId()).get());
        product.setCity(cityRepository.findById(productDTO.getCityId()).get());
        product.setCharacteristics(productDTO.getCharacteristics());
        productRepository.save(product);

        String fullPath = mainPath + "images/" + "products/";
        MultipartFile[] images = productDTO.getImages();

        for (MultipartFile img : images) {
            List<String> allowedFileTypes = Arrays.asList(".jpeg", ".jpg", ".png");
            String imgTitle = img.getOriginalFilename();
            if (allowedFileTypes.stream().noneMatch(type -> imgTitle.toLowerCase().endsWith(type))) throw new IOException("A imagem deve ser do formato JPEG, JPG ou PNG");

            Image image = new Image();
            String url = s3Service.uploadFileTos3bucket(fullPath, img);
            image.setTitle(imgTitle);
            image.setUrl(url);
            image.setProduct(product);
            imageRepository.save(image);
        }

        return product;
    }

    public boolean idExiste(Long id) {
        return productRepository.existsById(id);
    }

    public Product atualizar(ProductDTO productDTO) throws IOException {

        Product product = new Product();
        product.setId(productDTO.getId());
        product.setName(productDTO.getName());
        product.setLatitude(productDTO.getLatitude());
        product.setLongitude(productDTO.getLongitude());
        product.setDescription(productDTO.getDescription());
        product.setRules(productDTO.getRules());
        product.setHealthAndSafety(productDTO.getHealthAndSafety());
        product.setCancellationPolicy(productDTO.getCancellationPolicy());
        product.setCategory(categoryRepository.findById(productDTO.getCategoryId()).get());
        product.setCity(cityRepository.findById(productDTO.getCityId()).get());
        product.setCharacteristics(productDTO.getCharacteristics());
        productRepository.save(product);

        String fullPath = mainPath + "images/" + "products/";
        MultipartFile[] images = productDTO.getImages();

        for (MultipartFile img : images) {
            List<String> allowedFileTypes = Arrays.asList(".jpeg", ".jpg", ".png");
            String imgTitle = img.getOriginalFilename();
            if (allowedFileTypes.stream().noneMatch(type -> imgTitle.toLowerCase().endsWith(type))) throw new IOException("A imagem deve ser do formato JPEG, JPG ou PNG");

            // AJUSTAR AQUI!!! O PRODUTO ESTÁ FICANDO COM NOVAS E ANTIGAS IMAGENS

            Image image = new Image();
            String url = s3Service.uploadFileTos3bucket(fullPath, img);
            image.setTitle(imgTitle);
            image.setUrl(url);
            image.setProduct(product);
            imageRepository.save(image);
        }

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
