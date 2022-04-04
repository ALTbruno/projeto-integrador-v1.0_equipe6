import 'regenerator-runtime/runtime';
import React, { Component } from 'react';
import { render, screen, waitFor } from '../src/test-utils/testing-library-utils';
import RegisterPage from '../src/pages/Register/index';
import LoginPage from '../src/pages/Login/index';
import { Auth } from '../src/context/context';
import { BrowserRouter } from 'react-router-dom';
import PaginaReserva from '../src/pages/paginaReservas/index';
import StarRating from '../src/components/avaliationStars/index';
import PaginaProdutos from '../src/pages/paginaProdutos/index';
import Home from '../src/pages/Home/index';
import FavoriteHeart from '../src/components/favoriteHeart/index'
import SearchCity from '../src/pages/BuscaHoteisCity/index'
import SearchCategory from '../src/components/resultSearchByCategory/index';
import ResultByCategory from '../src/components/resultSearchByCategory/index';
import ResultByCity from '../src/components/resultSearchByCitys/index';
import Search from '../src/components/search/index'

describe("Renderizar todos as paginas com seus relativos componentes", () => {
    test('Renderizar a Pagina de Registro', () => {
        render(<RegisterPage />);
    });
 test('Renderizar a página de login', () => {
        render(
            <BrowserRouter>
                <LoginPage />
            </BrowserRouter>, { wrapper: Auth });
    });
    test('Renderizar a página de Reservas', () => {
        render(
            <PaginaReserva />, { wrapper: StarRating });
    });
    test('Renderizar a página de Produtos', () => {
        render(
            <PaginaProdutos />);
    });
    test('Renderizar a página Home', () => {
        render(

            <Home />, { wrapper: FavoriteHeart }
        );
    });
    test('Renderizar a página Cidades', () => {
        render(
            <SearchCity />, {wrapper: ResultByCity}
        );
    });
    test('Renderizar a página Categorias', () => {
        render(
            <SearchCategory />, {wrapper: ResultByCategory}
        );
    });

});