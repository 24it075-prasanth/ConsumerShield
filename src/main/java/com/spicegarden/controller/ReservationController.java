package com.spicegarden.controller;

import com.spicegarden.entity.Reservation;
import com.spicegarden.repository.ReservationRepository;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reservations")
@CrossOrigin
public class ReservationController {

    private final ReservationRepository reservationRepository;

    public ReservationController(
            ReservationRepository reservationRepository) {

        this.reservationRepository = reservationRepository;
    }

    // GET all reservations
    @GetMapping
    public List<Reservation> getAllReservations() {

        return reservationRepository.findAll();
    }

    // POST new reservation
    @PostMapping
    public Reservation createReservation(
            @RequestBody Reservation reservation) {

        reservation.setStatus("PENDING");

        return reservationRepository.save(reservation);
    }
}