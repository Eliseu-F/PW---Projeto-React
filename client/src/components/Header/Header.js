import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="container6">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary" data-bs-theme="dark">
                <div className="container">
                    <header className="navbar-brand" to="/">TOY STORE</header>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/gerenciar">Gerenciar</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/novidades">Novidades</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cadastro">Cadastro</Link>
                    </li>
                </ul>
            </nav>

        </header>
    );
}

export default Header;