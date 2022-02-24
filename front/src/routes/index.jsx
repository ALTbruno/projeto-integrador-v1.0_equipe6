import Home from '../pages/Home';
import Footer from '../components/footer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from '../components/header';
import LoginPage from "../pages/Login";
import RegisterPage from '../pages/Register';

const RouteList = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
        </Routes>
        <Footer />
    </BrowserRouter>
)

export default RouteList;