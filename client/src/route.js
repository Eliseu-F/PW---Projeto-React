import { BrowserRouter, Routes, Route } from "react-router-dom";

import Baby from "./pages/baby";
import Carrinho from "./pages/carrinho";
import Estoque from "./pages/estoque";
import Home from "./pages/home";
import Novidades from "./pages/novidades";
import Ofertas from "./pages/ofertas";
import Cadastro from "./pages/cadastro";
import Gerenciar from "./pages/gerenciar";
import NaoEncontrada from "./pages/desconhecida";
import Sobre from "./pages/sobrenos";
import Produto from "./pages/produto";
import Header from "./components/Header/Header";
import Login from "./pages/login";

function RouterApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/gerenciar" element={<Gerenciar />} />
                <Route path="/novidades" element={<Novidades />} />
                <Route path="/baby" element={<Baby />} />
                <Route path="/estoque" element={<Estoque />} />
                <Route path="/ofertas" element={<Ofertas />} />
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="/cadastro" element={< Cadastro />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/produto/" element={<Produto />} />
                <Route path="/produto/:id" element={<Produto />} />
                <Route path="*" element={<NaoEncontrada />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp;