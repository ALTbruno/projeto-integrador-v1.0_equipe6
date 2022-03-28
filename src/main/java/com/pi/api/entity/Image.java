package com.pi.api.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.validator.constraints.URL;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "IMAGES")
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 255)
    private String title;

    @URL
    @NotBlank
    @Size(max = 255)
    private String url;

    @OneToMany(mappedBy = "images")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Set<Product> products;


    public Image() {
    }

    public Image(String title, String url) {
        this.title = title;
        url = url;
    }

    public Image(Long id) {
        this.id = id;
    }


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}
}
