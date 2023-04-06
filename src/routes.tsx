import Footer from 'components/Footer';
import Menu from 'components/Menu';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Admin = lazy(() => import('pages/Admin'));
const Inicio = lazy(() => import('pages/Inicio'));
const Cardapio = lazy(() => import('pages/Cardapio'));
const NotFound = lazy(() => import('pages/NotFound'));
const Pratos = lazy(() => import('pages/Pratos'));
const Sobre = lazy(() => import('pages/Sobre'));
const PaginaPadrao = lazy(() => import('components/PaginaPadrao'));

export default function AppRouter() {
  return (
    <main className='container'>
      <BrowserRouter>
        <Menu />
        <Suspense fallback={<p> Carregando... </p>}>
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
        </Suspense>
        <Footer />
      </BrowserRouter>
    </main>
  );
}