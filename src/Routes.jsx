import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Filme from './pages/Filme/Filme';
import Favoritos from './pages/Favoritos/Favoritos';
import NotFound from './pages/Error/NotFound';

export default function RoutesApp()    {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/filme/:idFilme" element={<Filme />} /> 
                <Route path="/favoritos" element={<Favoritos />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>   
    );
}
