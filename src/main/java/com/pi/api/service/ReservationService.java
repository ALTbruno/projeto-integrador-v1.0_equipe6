package com.pi.api.service;

import com.pi.api.entity.Reservation;
import com.pi.api.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ReservationService {

	@Autowired
	private ReservationRepository reservationRepository;

	public Reservation reservar(Reservation reservation) throws Exception {

		LocalDate today = LocalDate.now();

		LocalDate checkinDate = reservation.getCheckinDate();

		LocalDate checkoutDate = reservation.getCheckoutDate();

		if (checkinDate.isBefore(today))
			throw new Exception("A data de CheckIn não pode ser anterior a data de Hoje");

		if (checkoutDate.isBefore(checkinDate))
			throw new Exception("A data de CheckOut não pode ser anterior a data de CheckIn");

		return reservationRepository.save(reservation);
	}

	public List<Reservation> listarPorProduto(Long id) {
		return reservationRepository.findByProductId(id);
	}

	public List<Reservation> listarPorCliente(Long id) {
		return reservationRepository.findByCustomerId(id);
	}
}
