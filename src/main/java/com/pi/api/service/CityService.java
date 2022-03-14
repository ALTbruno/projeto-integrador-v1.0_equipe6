package com.pi.api.service;

import com.pi.api.entity.City;
import com.pi.api.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CityService {

    @Autowired
    private CityRepository cityRepository;

    public City salvar(City city) {
        return cityRepository.save(city);
    }

    public List<City> buscarTodos() {
        return cityRepository.findAll();
    }

}
