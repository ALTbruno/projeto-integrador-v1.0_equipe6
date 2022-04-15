package com.pi.api.controller;

import com.pi.api.model.Characteristic;
import com.pi.api.service.CharacteristicService;
import com.pi.api.service.S3Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@RestController
@RequestMapping("/api/characteristics")
public class CharacteristicController {

	@Autowired
	private CharacteristicService characteristicService;

	@PostMapping("/add")
	public ResponseEntity<Characteristic> criar(@ModelAttribute Characteristic characteristic, @RequestPart MultipartFile iconFile) throws IOException {
		return ResponseEntity.status(HttpStatus.CREATED).body(characteristicService.criar(characteristic, iconFile));
	}
}
