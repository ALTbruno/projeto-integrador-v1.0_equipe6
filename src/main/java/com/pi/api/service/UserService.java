package com.pi.api.service;

import com.pi.api.entity.User;
import com.pi.api.repository.AdminRepository;
import com.pi.api.repository.CustomerRepository;
import com.pi.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private AdminRepository adminRepository;

	@Autowired
	private CustomerRepository customerRepository;

	public boolean emailJaCadastrado(String email) {
		return adminRepository.existsByEmail(email) || customerRepository.existsByEmail(email);
	}

	public User adicionar(User user) throws Exception {

		if (user.getPassword().length() < 8) {
			throw new Exception("A senha deve ter no mínimo 8 caracteres");
		}

		if (emailJaCadastrado(user.getEmail())) {
			throw new Exception("Email já cadastrado");
		}

		return userRepository.save(user);
	}

}
