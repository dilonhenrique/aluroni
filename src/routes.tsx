import Footer from 'components/Footer';
import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Admin from 'pages/Admin';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import NotFound from 'pages/NotFound';
import Pratos from 'pages/Pratos';
import Sobre from 'pages/Sobre';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
    return (
        <main className='container'>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<PaginaPadrao />}>
                        <Route index element={<Inicio />} />
                        <Route path="cardapio" element={<Cardapio />} />
                        <Route path="sobre" element={<Sobre />} />
                    </Route>
                    <Route path="pratos/:id" element={<Pratos />} />
                    <Route path='admin/:user' element={<Admin />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </main>
    );
}