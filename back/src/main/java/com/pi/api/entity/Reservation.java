package com.pi.api.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "reservations")
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private LocalDateTime horarioInicio;

    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private LocalDateTime inicioReserva;

    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private LocalDateTime finalReserva;


    @ManyToOne( cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name = "id_product")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Product products;


    public Reservation() {
    }


    public Reservation(LocalDateTime horarioInicio, LocalDateTime inicioReserva, LocalDateTime finalReserva) {
        this.horarioInicio = horarioInicio;
        this.inicioReserva = inicioReserva;
        this.finalReserva = finalReserva;
    }

    public Long getId() {
        return id;
    }

    public LocalDateTime getHorarioInicio() {
        return horarioInicio;
    }

    public void setHorarioInicio(LocalDateTime horarioInicio) {
        this.horarioInicio = horarioInicio;
    }

    public LocalDateTime getInicioReserva() {
        return inicioReserva;
    }

    public void setInicioReserva(LocalDateTime inicioReserva) {
        this.inicioReserva = inicioReserva;
    }

    public LocalDateTime getFinalReserva() {
        return finalReserva;
    }

    public void setFinalReserva(LocalDateTime finalReserva) {
        this.finalReserva = finalReserva;
    }
}
