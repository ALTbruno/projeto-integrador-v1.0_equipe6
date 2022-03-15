package com.pi.api.repository;

import com.pi.api.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

	List<Product> findByCategoryTitle(String title);

	List<Product> findByCityName(String name);

}
