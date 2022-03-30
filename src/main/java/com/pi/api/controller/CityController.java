package com.pi.api.controller;

import com.pi.api.entity.City;
import com.pi.api.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "")
@RestController
@RequestMapping("/cities")
public class CityController {

    @Autowired
    private CityService cityService;

    @PostMapping("/add")
    public ResponseEntity<City> cadastrar(@RequestBody City city) {
        return ResponseEntity.status(HttpStatus.CREATED).body(cityService.salvar(city));
    }

    @GetMapping
    public ResponseEntity<Iterable<City>> buscarTodos() {
        return ResponseEntity.ok(cityService.buscarTodos());
    }

}
