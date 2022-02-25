import Home from '../pages/Home';
import Footer from '../components/footer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from '../components/header';
import { Auth } from '../context/context';
import LoginPage from "../pages/Login";
import RegisterPage from '../pages/Register';

const RouteList = () => (
    <BrowserRouter>
        <Auth>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
            </Routes>
            <Footer />
        </Auth>
    </BrowserRouter>
)

export default RouteList;