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

	@Value("${endpointUrl}")
	private String endpointUrl;

	@Value("${bucketName}")
	private String bucketName;

	@Value("${mainDirectory}")
	private String mainDirectory;

	@Autowired
	private CharacteristicService characteristicService;

	@Autowired
	private S3Service s3Service;

	@PostMapping("/add")
	public ResponseEntity<Characteristic> criar(@ModelAttribute Characteristic characteristic, @RequestPart MultipartFile iconFile) throws IOException {

		String directory = mainDirectory + "images/" + "characteristics/";

		File file = s3Service.convertMultiPartToFile(iconFile);
		String dateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy_HH-mm-ss-ms"));
		String fileName = dateTime + "_" + iconFile.getOriginalFilename();
		s3Service.uploadFileTos3bucket(directory, fileName, file);
		String fileUrl = "https://" + bucketName + "." + endpointUrl + "/" + directory + fileName;
		file.delete();

		characteristic.setIcon(fileUrl);

		return ResponseEntity.status(HttpStatus.CREATED).body(characteristicService.criar(characteristic));
	}
}
