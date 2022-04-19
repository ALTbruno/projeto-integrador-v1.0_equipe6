package com.pi.api.controller;

import com.pi.api.dto.CharacteristicDTO;
import com.pi.api.model.Characteristic;
import com.pi.api.service.CharacteristicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/characteristics")
public class CharacteristicController {

	@Autowired
	private CharacteristicService characteristicService;

	@PostMapping("/add")
	public ResponseEntity<Characteristic> criar(@ModelAttribute CharacteristicDTO characteristicDTO) throws IOException {
		return ResponseEntity.status(HttpStatus.CREATED).body(characteristicService.criar(characteristicDTO));
	}

	@GetMapping
    public ResponseEntity<List<City>> listar() {
        return ResponseEntity.ok(characteristicService.listar());
    }

}
