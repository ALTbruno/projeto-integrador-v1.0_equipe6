package com.pi.api.repository;

import com.pi.api.model.Admin;
import com.pi.api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {

	public Optional<User> findByEmail(String email);

	boolean existsByEmail(String email);
}
