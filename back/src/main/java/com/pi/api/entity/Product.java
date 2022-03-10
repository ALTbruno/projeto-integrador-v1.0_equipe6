package com.pi.api.entity;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 255)
    private String name;

    @NotBlank
    @Size(max = 255)
    private String description;

    @ManyToOne( cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name = "id_reservation")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Reservation reservation;

    @ManyToOne( cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name = "id_characteristc")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Characteristc characteristc;


    @ManyToOne( cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name = "id_category")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Category category;

    @ManyToOne( cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name = "id_city")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private City city;

    @ManyToOne( cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name = "id_image")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Image image;

    public Product(String name, String description, Reservation reservation, Characteristc characteristc, Category category, City city, Image image) {
        this.name = name;
        this.description = description;
        this.reservation = reservation;
        this.characteristc = characteristc;
        this.category = category;
        this.city = city;
        this.image = image;
    }

    public Product() {
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Reservation getReservation() {
        return reservation;
    }

    public void setReservation(Reservation reservation) {
        this.reservation = reservation;
    }

    public Characteristc getCharacteristc() {
        return characteristc;
    }

    public void setCharacteristc(Characteristc characteristc) {
        this.characteristc = characteristc;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public Image getImage() {
        return image;
    }

    public void setImage(Image image) {
        this.image = image;
    }
}
