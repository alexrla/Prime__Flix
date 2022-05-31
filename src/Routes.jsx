import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Filme from './pages/Filme/Filme';

import Header from './components/Header/Header';

export default function RoutesApp()    {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/filme/:idFilme" element={<Filme />} /> 
            </Routes>
        </BrowserRouter>   
    );
}
