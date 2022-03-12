package com.pi.api.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.sql.Time;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "reservations")
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @DateTimeFormat(pattern = "HH:mm:ss")
    private Time horarioInicio;

    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date inicioReserva;

    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date finalReserva;

    @OneToMany(mappedBy ="reservation", cascade = CascadeType.ALL)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Set<Product> product = new HashSet<>();

    @OneToMany(mappedBy ="reservation", cascade = CascadeType.ALL)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Set<User> user = new HashSet<>();


    public Reservation() {
    }

    public Reservation(Time horarioInicio, Date inicioReserva, Date finalReserva) {
        this.horarioInicio = horarioInicio;
        this.inicioReserva = inicioReserva;
        this.finalReserva = finalReserva;
    }



    public Reservation(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public Time getHorarioInicio() {
        return horarioInicio;
    }

    public void setHorarioInicio(Time horarioInicio) {
        this.horarioInicio = horarioInicio;
    }

    public Date getInicioReserva() {
        return inicioReserva;
    }

    public void setInicioReserva(Date inicioReserva) {
        this.inicioReserva = inicioReserva;
    }

    public Date getFinalReserva() {
        return finalReserva;
    }

    public void setFinalReserva(Date finalReserva) {
        this.finalReserva = finalReserva;
    }
}
