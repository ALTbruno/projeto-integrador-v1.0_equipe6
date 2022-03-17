import Home from '../pages/Home';
import Footer from '../components/footer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from '../components/header';
import { Auth } from '../context/context';
import Result from '../../src/components/result'
import LoginPage from "../pages/Login";
import RegisterPage from '../pages/Register';
import PaginaProdutos from '../pages/paginaProdutos';

const RouteList = () => (
    <BrowserRouter>
        <Auth>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search/:city" element={<Result />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/produto' element={<PaginaProdutos />} />
            </Routes>
            <Footer />
        </Auth>
    </BrowserRouter>
)

export default RouteList;