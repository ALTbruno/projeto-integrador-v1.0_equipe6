package com.pi.api.repository;

import com.pi.api.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {

	boolean existsByCheckinDateGreaterThanEqualAndCheckinDateLessThanEqualAndProductId (LocalDate checkinDate, LocalDate checkin, Long id);

	List<Reservation> findByProductId(Long id);

	List<Reservation> findByCustomerId(Long id);

}
