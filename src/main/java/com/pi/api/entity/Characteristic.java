package com.pi.api.entity;

import org.hibernate.validator.constraints.URL;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Set;

@Entity
@Table(name = "CHARACTERISTICS")
public class Characteristic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    @NotBlank
    @Size(max = 255)
    private String name;

    @URL
    @NotBlank
    @Size(max = 255)
    private String icon;

    @ManyToMany(mappedBy = "characteristics", cascade = CascadeType.ALL)
    private Set<Product> products;

    public Characteristic() {
    }

    public Characteristic(String name, String icon) {
        this.name = name;
        this.icon = icon;
    }

    public Long getId() {
        return id;
    }

    public Characteristic(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }
}








