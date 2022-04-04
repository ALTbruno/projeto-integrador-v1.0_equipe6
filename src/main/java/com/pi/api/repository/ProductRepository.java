package com.pi.api.repository;

import com.pi.api.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

	List<Product> findByCategoryTitleContainingIgnoreCase(String categoryTitle);

	List<Product> findByCityNameContainingIgnoreCase(String cityName);

	Long countProductByCategoryId(Long categoryId);
}
