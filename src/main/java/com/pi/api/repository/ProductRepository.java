package com.pi.api.repository;

import com.pi.api.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

	Page<Product> findByCategoryTitleContainingIgnoreCase(String categoryTitle, Pageable pageable);

	Page<Product> findByCityNameContainingIgnoreCase(String cityName, Pageable pageable);

	Long countProductByCategoryId(Long categoryId);

	@Query(value = "SELECT * FROM products INNER JOIN cities ON products.id_city = cities.id AND cities.name LIKE %?1% WHERE products.id NOT IN (SELECT reservations.id_product FROM reservations WHERE (checkin_date BETWEEN ?2 AND ?3) OR (checkout_date BETWEEN ?2 AND ?3))", nativeQuery = true)
	Page<Product> buscarPorCidadeEDatasDisponiveis(String cityName, String checkinDate, String checkoutDate, Pageable pageable);
}
