package com.pi.api.repository;

import com.pi.api.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {

	List<Reservation> findByProductId(Long id);

	List<Reservation> findByCustomerId(Long id);

}
