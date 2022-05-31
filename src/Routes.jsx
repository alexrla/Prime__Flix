import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Filme from './pages/Filme/Filme';

export default function RoutesApp()    {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/filme/:idFilme" element={<Filme />} /> 
            </Routes>
        </BrowserRouter>   
    );
}
