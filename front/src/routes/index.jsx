import Home from '../pages/Home';
import Footer from '../components/footer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from '../components/header';

const RouteList = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        {/* <Footer /> */}
    </BrowserRouter>
)

export default RouteList;