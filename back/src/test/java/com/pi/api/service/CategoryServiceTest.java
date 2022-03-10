package com.pi.api.service;

import com.pi.api.entity.Category;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class CategoryServiceTest {

	Category c = new Category();

	@Autowired
	private CategoryService categoryService;

	@BeforeEach
	void beforeTests() {
		Category praia = categoryService.salvar(new Category("Casas de Praia","Descricao Casas na praia","https://cdn.pixabay.com/photo/2018/03/20/02/26/palm-3241933_960_720.jpg"));
		Category fazenda = categoryService.salvar(new Category("Fazendas","Tranquilidade e paz ouvindo o som dos animais.","https://cdn.pixabay.com/photo/2018/03/30/10/33/farm-3275018_960_720.jpg"));
		Category castelo = categoryService.salvar(new Category("Castelos","Descrição castelos","https://cdn.pixabay.com/photo/2021/08/23/07/38/castle-6566978_960_720.jpg"));
	}

	@Order(1)
	@Test
	void cadastrarCategoriaTest() {

		//c.setTitle("C");
		c.setDescription("Desconecte-se do mundo e conecte-se com a natureza.");
		c.setImageUrl("https://cdn.pixabay.com/photo/2016/12/06/14/33/log-cabin-1886620_960_720.jpg");

		categoryService.salvar(c);

		Long id = c.getId();

		assertNotNull(id);
	}

	@Order(2)
	@Test
	void atualizarCategoriaTest() {

		Long id = 4L; // id da categoria a ser atualizada

		c.setId(id);
		//c.setTitle("Cabanas");
		c.setDescription(categoryService.buscarPorId(id).get().getDescription());
		c.setImageUrl(categoryService.buscarPorId(id).get().getImageUrl());

		categoryService.atualizar(c);
	}

	@Order(3)
	@Test
	void listarTodasCategoriasTest() {

		List<Category> categories = categoryService.buscarTodos();

		assertFalse(categories.isEmpty());
		assertEquals(categories.size(), 10);
	}

	@Order(4)
	@Test
	void excluirCategoriaTest() {

		Long id = 5L;

		categoryService.excluir(id);

		Assertions.assertTrue(categoryService.buscarPorId(id).isEmpty());
	}

}