package com.pi.api.controller;

import com.pi.api.entity.Customer;
import com.pi.api.entity.Role;
import com.pi.api.entity.User;
import com.pi.api.entity.Admin;
import com.pi.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "")
@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("/customers/register")
	public ResponseEntity<User> registrarCliente(@RequestBody Customer customer) throws Exception {
		customer.setRole(Role.CUSTOMER);
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.adicionar(customer));
	}

	@PostMapping("/admin/register")
	public ResponseEntity<User> registrarUsuario(@RequestBody Admin admin) throws Exception {
		admin.setRole(Role.ADMIM);
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.adicionar(admin));
	}
}
