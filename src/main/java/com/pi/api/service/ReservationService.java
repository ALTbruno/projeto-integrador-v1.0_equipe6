package com.pi.api.service;

import com.pi.api.model.Product;
import com.pi.api.model.Reservation;
//import com.pi.api.entity.UnavailableDate;
import com.pi.api.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ReservationService {

	@Autowired
	private ReservationRepository reservationRepository;

//	boolean dataIndisponivel(LocalDate checkinDate) {
//		return reservationRepository.existsByCheckinDateGreaterThanEqualAndCheckinDateLessThanEqual(checkinDate, checkinDate);
//	}

	public Reservation reservar(Reservation reservation) throws Exception {

		LocalDate today = LocalDate.now();

		LocalDate checkinDate = reservation.getCheckinDate();

		LocalDate checkoutDate = reservation.getCheckoutDate();

		if (checkinDate.isBefore(today))
			throw new Exception("A data de CheckIn não pode ser anterior a data de Hoje");

		if (checkoutDate.isBefore(checkinDate))
			throw new Exception("A data de CheckOut não pode ser anterior a data de CheckIn");

//		if (dataIndisponivel(reservation.getCheckinDate()))
//			throw new Exception("Data indisponivel");

//		Set<LocalDate> datasReservadas = (Set<LocalDate>) checkinDate.datesUntil(checkoutDate);
//		Product product = reservation.getProduct();
//		product@.setUnavailableDates(datasReservadas);


//		while (checkinDate.isBefore(checkoutDate)) {
//			System.out.println(checkinDate);
//			product.setUnavailableDates(checkinDate);
//			checkinDate = checkinDate.plusDays(1);
//		}

		return reservationRepository.save(reservation);
	}

	public List<Reservation> listarPorProduto(Long id) {
		return reservationRepository.findByProductId(id);
	}

	public List<Reservation> listarPorCliente(Long id) {
		return reservationRepository.findByCustomerId(id);
	}
}
