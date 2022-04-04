package com.pi.api.controller;

import com.pi.api.model.Reservation;
import com.pi.api.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "")
@RestController
@RequestMapping("/api/reservations")
public class ReservationController {

	@Autowired
	private ReservationService reservationService;

	@PostMapping("/book")
	public ResponseEntity<Reservation> reservar(@RequestBody Reservation reservation) throws Exception {
		return ResponseEntity.status(HttpStatus.CREATED).body(reservationService.reservar(reservation));
	}

	@GetMapping("/productId={id}")
	public ResponseEntity<List<Reservation>> listarReservasPorProduto(@PathVariable Long id) {
		return ResponseEntity.ok(reservationService.listarPorProduto(id));
	}

	@GetMapping("/customerId={id}")
	public ResponseEntity<List<Reservation>> listarReservasPorCliente(@PathVariable Long id) {
		return ResponseEntity.ok(reservationService.listarPorCliente(id));
	}
}
