package com.pi.api.service;

import com.pi.api.model.Product;
import com.pi.api.model.Reservation;
import com.pi.api.repository.ProductRepository;
import com.pi.api.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {

	@Autowired
	private ReservationRepository reservationRepository;

	@Autowired
	private ProductRepository productRepository;

	public boolean idExiste(Long id) {
		return reservationRepository.existsById(id);
	}

	public Reservation reservar(Reservation reservation) throws Exception {

		LocalDate today = LocalDate.now();

		LocalDate checkinDate = reservation.getCheckinDate();

		LocalDate checkoutDate = reservation.getCheckoutDate();

		if (checkinDate.isBefore(today))
			throw new Exception("A data de CheckIn não pode ser anterior a data de Hoje");

		if (checkoutDate.isBefore(checkinDate))
			throw new Exception("A data de CheckOut não pode ser anterior a data de CheckIn");

		Long productId = reservation.getProduct().getId();

		if (reservationRepository.existsByCheckoutDateBetweenAndProductId (checkinDate, checkoutDate, productId)) {
			throw new Exception("Datas indisponíveis");
		}

//LISTAR RESERVAS POR PRODUTO

		return reservationRepository.save(reservation);
	}

	public Optional<Reservation> buscarPorId(Long id) {
		return reservationRepository.findById(id);
	}

	public Reservation avaliar(Reservation reservation) throws Exception {

		if (reservation.getScore() < 1 || reservation.getScore() > 5) {
			throw new Exception("A avaliação deve ser entre 1 e 5");
		}

		Long reservationId = reservation.getId();

		Reservation r = buscarPorId(reservationId).get();

		reservation.setId(reservationId);
		reservation.setCheckinTime(r.getCheckinTime());
		reservation.setCheckinDate(r.getCheckinDate());
		reservation.setCheckoutDate(r.getCheckoutDate());
		reservation.setCustomer(r.getCustomer());
		reservation.setProduct(r.getProduct());

		Product product = r.getProduct();
		product.setScore(reservationRepository.averageScoreByProductId(product.getId()));
		productRepository.save(product);

		return reservationRepository.save(reservation);
	};

	public List<Reservation> listarPorProduto(Long id) {
		return reservationRepository.findByProductId(id);
	}

	public List<Reservation> listarPorCliente(Long id) {
		return reservationRepository.findByCustomerId(id);
	}
}
