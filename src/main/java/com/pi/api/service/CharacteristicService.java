package com.pi.api.service;

import com.pi.api.model.Characteristic;
import com.pi.api.repository.CharacteristicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CharacteristicService {

	@Autowired
	private CharacteristicRepository characteristicRepository;

	public Characteristic criar(Characteristic characteristic) {
		return characteristicRepository.save(characteristic);
	}
}
