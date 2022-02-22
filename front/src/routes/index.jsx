import Home from '../pages/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


const  RouteList =() => (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
)

export default RouteList;