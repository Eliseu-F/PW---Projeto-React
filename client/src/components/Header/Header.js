import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="container6">          
            <h3>
                <Link to="/" > Home </Link>
                <Link to="/gerenciar" > Gerenciar </Link>
                <Link to="/novidade" >Novidades </Link>
                <Link to="/ofertas" >Ofertas </Link>
                <Link to="/baby" >Baby </Link>
                <Link to="/carrinho" >Carrinho </Link>
                <Link to="/sobre" >Sobre </Link>
                <Link to="/login" > Login</Link>
                <Link to="/cadastro" >Cadastro </Link>
            </h3>
        </header>
    )
}

export default Header