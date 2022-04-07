package com.pi.api.service;

import com.pi.api.model.User;
import com.pi.api.repository.AdminRepository;
import com.pi.api.repository.CustomerRepository;
import com.pi.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Optional;

@Service
public class UserService implements UserDetailsService {

	@Autowired private UserRepository userRepository;

	@Autowired private AdminRepository adminRepository;

	@Autowired private CustomerRepository customerRepository;

	public boolean emailJaCadastrado(String email) {
		return adminRepository.existsByEmail(email) || customerRepository.existsByEmail(email);
	}

	public Optional<User> buscarPorId(Long id) {
		return userRepository.findById(id);
	}

	public User registrar(User user) throws Exception {
//		if (user.getPassword().length() < 8) throw new Exception("A senha deve ter no mínimo 8 caracteres");
		if (emailJaCadastrado(user.getEmail())) throw new Exception("Email já cadastrado");
//		user.setPassword(passwordEncoder.encode(user.getPassword()));
		return userRepository.save(user);
	}

	public Optional<User> findByEmail(String email) {
		Optional<User> admin = adminRepository.findByEmail(email);
		Optional<User> customer = customerRepository.findByEmail(email);
		User user = admin.orElseGet(customer::get);
		return Optional.of(user);
	}


	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

		Optional<User> userRes = findByEmail(email);

		if(userRes.isEmpty())
			throw new UsernameNotFoundException("Could not find User with email = " + email);

		User user = userRes.get();

		String role = user.getRole().toString();

		return new org.springframework.security.core.userdetails.User(
				email,
				user.getPassword(),
				Collections.singletonList(new SimpleGrantedAuthority(role)));
	}
}
