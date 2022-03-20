CREATE TABLE categories (
	id BIGINT NOT NULL AUTO_INCREMENT,
	title VARCHAR(50),
    description VARCHAR(255),
    image_url VARCHAR(255),
    PRIMARY KEY (id)
);

 CREATE TABLE cities (
	id BIGINT NOT NULL AUTO_INCREMENT,
	name VARCHAR(100),
	country VARCHAR(100),
	PRIMARY KEY (id)
);

 CREATE TABLE characteristics (
	id BIGINT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255),
	icon VARCHAR(255),
	PRIMARY KEY (id)
);

CREATE TABLE images (
	id BIGINT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255),
    url VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE products (
	id BIGINT NOT NULL AUTO_INCREMENT,
    description VARCHAR(255),
    name VARCHAR(255),
    id_category BIGINT,
    id_city BIGINT,
    PRIMARY KEY (id),
    FOREIGN KEY (id_category) REFERENCES categories(id),
    FOREIGN KEY (id_city) REFERENCES cities(id)
);

CREATE TABLE product_characteristic (
	product_id BIGINT NOT NULL,
    characteristic_id BIGINT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (characteristic_id) REFERENCES characteristics(id),
    PRIMARY KEY (product_id, characteristic_id)
);

CREATE TABLE products_images (
	product_id BIGINT NOT NULL,
    images_id BIGINT NOT NULL UNIQUE,
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (images_id) REFERENCES images(id),
    PRIMARY KEY (product_id, images_id)
);

