package com.pi.api.service;

import com.pi.api.dto.CharacteristicDTO;
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

	@Value("${mainPath}")
	private String mainPath;

	public Characteristic criar(CharacteristicDTO characteristicDTO) throws IOException {

		MultipartFile image = characteristicDTO.getImage();

		if (!image.getOriginalFilename().toLowerCase().endsWith(".svg")) throw new IOException("O ícone deve ser do tipo SVG");

		String fullPath = mainPath + "images/" + "characteristics/";
		String url = s3Service.uploadFileTos3bucket(fullPath, image);

		Characteristic characteristic = new Characteristic();
		characteristic.setName(characteristicDTO.getName());
		characteristic.setIcon(url);
		return characteristicRepository.save(characteristic);
	}

	public List<Characteristic> listar() {
		return characteristicRepository.findAll();
	}
}
