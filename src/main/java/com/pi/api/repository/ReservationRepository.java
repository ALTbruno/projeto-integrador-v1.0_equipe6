package com.pi.api.repository;

import com.pi.api.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {

//	boolean existsByCheckinDateGreaterThanEqualAndCheckinDateLessThanEqual(LocalDate checkinDate, LocalDate checkin);

//	findByTimeStampGreaterThanEqualAndTimeStampLessThanEqual(fromDate,toDate);
//
//	findAllByStartDateLessThanEqualAndEndDateGreaterThanEqual(OffsetDateTime endDate, OffsetDateTime startDate);

	List<Reservation> findByProductId(Long id);

	List<Reservation> findByCustomerId(Long id);

}
