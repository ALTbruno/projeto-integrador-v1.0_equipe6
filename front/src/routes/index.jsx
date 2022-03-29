import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Auth } from '../context/context';
import Footer from '../components/footer';
import Header from '../components/header';
import Home from '../pages/Home';
import HoteisSearchByCity from '../pages/BuscaHoteisCity'
import HoteisSearchByCategory from '../pages/BuscaHoteisCategoria';
import LoginPage from "../pages/Login";
import RegisterPage from '../pages/Register';
import PaginaProdutos from '../pages/paginaProdutos';
import React from 'react';

const RouteList = () => (
    <BrowserRouter>
        <Auth>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search/:city" element={<HoteisSearchByCity />} />
                <Route path="/category/:category" element={<HoteisSearchByCategory />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/produto/:id' element={<PaginaProdutos />} />
            </Routes>
            <Footer />
        </Auth>
    </BrowserRouter>
)

export default RouteList;