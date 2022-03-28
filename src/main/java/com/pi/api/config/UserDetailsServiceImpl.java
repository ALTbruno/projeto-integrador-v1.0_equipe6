package com.pi.api.config;

import com.pi.api.entity.Customer;
import com.pi.api.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private CustomerRepository customerRepository;

	@Bean
	public PasswordEncoder getPasswordEncoder() {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		return encoder;
	}


	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

		Optional<Customer> customer = customerRepository.findByEmail(email);

		customer.orElseThrow(() -> new UsernameNotFoundException(email + "não encontrado"));

		Set<GrantedAuthority> roleList = new HashSet<GrantedAuthority>();

		roleList.add(new SimpleGrantedAuthority("CUSTOMER"));

		UserDetails user = new User(customer.get().getEmail(), customer.get().getPassword(), roleList);

		return user;
	}
}
