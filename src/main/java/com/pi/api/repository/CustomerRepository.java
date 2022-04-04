package com.pi.api.repository;

import com.pi.api.model.Customer;
import com.pi.api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

	public Optional<User> findByEmail(String email);

	boolean existsByEmail(String email);
}
