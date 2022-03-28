package com.pi.api.service;

import com.pi.api.entity.Customer;
import com.pi.api.entity.Role;
import com.pi.api.repository.CustomerRepository;
import com.pi.api.repository.ProductRepository;
import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpStatusCodeException;

import java.nio.charset.Charset;
import java.util.Optional;

@Service
public class CustomerService {

	@Autowired
	private CustomerRepository customerRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	public boolean emailJaCadastrado(String email) {
		return customerRepository.existsByEmail(email);
	}

	public Customer cadastrar(Customer customer) throws Exception {

		if (customer.getPassword().length() < 8) {
			throw new Exception("A senha deve ter no mínimo 8 caracteres");
		}

		if (emailJaCadastrado(customer.getEmail())) {
			throw new Exception("Email já cadastrado");
		}

		customer.setPassword(passwordEncoder.encode(customer.getPassword()));

		customer.setRole(Role.CUSTOMER);

		return customerRepository.save(customer);
	}

}
