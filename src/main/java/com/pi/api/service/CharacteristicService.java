package com.pi.api.service;

import com.pi.api.model.Characteristic;
import com.pi.api.repository.CharacteristicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class CharacteristicService {

	@Autowired
	private CharacteristicRepository characteristicRepository;

	@Autowired
	private S3Service s3Service;

	@Value("${mainDirectory}")
	private String mainDirectory;

	public Characteristic criar(Characteristic characteristic, MultipartFile iconFile) throws IOException {
		String directory = mainDirectory + "images/" + "characteristics/";
		String url = s3Service.uploadFileTos3bucket(directory, iconFile);
		characteristic.setIcon(url);
		return characteristicRepository.save(characteristic);
	}
}
