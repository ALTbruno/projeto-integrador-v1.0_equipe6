package com.pi.api.controller;

import com.pi.api.model.Admin;
import com.pi.api.security.JwtUtil;
import com.pi.api.dto.LoginDTO;
import com.pi.api.model.Customer;
import com.pi.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
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


	@PostMapping("/customers/register")
	public Map<String, Object> registerHandler(@RequestBody Customer customer) throws Exception {
		String email = customer.getEmail().toLowerCase();
		customer = (Customer) userService.registrarCliente(customer);
		String token = jwtUtil.generateToken(email);
		return Collections.singletonMap("accessToken", token);
	}

	@PostMapping("/admin/register")
	public Map<String, Object> registerHandler(@RequestBody Admin admin) throws Exception {
		String email = admin.getEmail().toLowerCase();
		admin = (Admin) userService.registrarAdmin(admin);
		String token = jwtUtil.generateToken(email);
		return Collections.singletonMap("accessToken", token);
	}

	@PostMapping("/login")
	public Map<String, Object> login(@RequestBody LoginDTO loginDTO){
		try {
			UsernamePasswordAuthenticationToken authInputToken =
					new UsernamePasswordAuthenticationToken(loginDTO.getEmail(), loginDTO.getPassword());
			authenticationManager.authenticate(authInputToken);
			String token = jwtUtil.generateToken(loginDTO.getEmail());
			return Collections.singletonMap("accessToken", token);
		}catch (AuthenticationException authExc){
			throw new RuntimeException("Invalid Login Credentials");
		}
	}
}
