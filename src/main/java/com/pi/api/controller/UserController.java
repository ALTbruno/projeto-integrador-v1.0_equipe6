package com.pi.api.controller;

import com.pi.api.model.Admin;
import com.pi.api.security.JwtUtil;
import com.pi.api.model.LoginRequest;
import com.pi.api.model.Customer;
import com.pi.api.model.Role;
import com.pi.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Map;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/users")
public class UserController {

	@Autowired
	private UserService userService;

	@Autowired
	private JwtUtil jwtUtil;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private PasswordEncoder passwordEncoder;


	@PostMapping("/customers/register")
	public Map<String, Object> registerHandler(@RequestBody Customer customer) throws Exception {

		if (customer.getPassword().length() < 8) {
			throw new Exception("A senha deve ter no mínimo 8 caracteres");
		}

		customer.setPassword(passwordEncoder.encode(customer.getPassword()));

		customer.setRole(Role.CUSTOMER);

		customer = (Customer) userService.registrar(customer);

		String token = jwtUtil.generateToken(customer.getEmail());

		return Collections.singletonMap("accessToken", token);
	}

	@PostMapping("/admin/register")
	public Map<String, Object> registerHandler(@RequestBody Admin admin) throws Exception {

		if (admin.getPassword().length() < 8) {
			throw new Exception("A senha deve ter no mínimo 8 caracteres");
		}

		admin.setPassword(passwordEncoder.encode(admin.getPassword()));

		admin.setRole(Role.ADMIM);

		admin = (Admin) userService.registrar(admin);

		String token = jwtUtil.generateToken(admin.getEmail());

		return Collections.singletonMap("accessToken", token);
	}

	@PostMapping("/login")
	public Map<String, Object> login(@RequestBody LoginRequest loginRequest){

		try {
			UsernamePasswordAuthenticationToken authInputToken =
					new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword());

			authenticationManager.authenticate(authInputToken);

			String token = jwtUtil.generateToken(loginRequest.getEmail());

			return Collections.singletonMap("accessToken", token);
		}catch (AuthenticationException authExc){
			throw new RuntimeException("Invalid Login Credentials");
		}
	}
}
