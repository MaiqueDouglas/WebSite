import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import logo from "../../assets/logo.png";

function Header() {
  const navigate = useNavigate();

  return (
    <div className='container-header'>
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt='logo'/>
            </div>
            </div>
            <div className="router-links">
                <a onClick={() => navigate("/")} className="link">Home</a>
                <a onClick={() => navigate("/Blog")} className="link">Artigos</a>
                <a onClick={() => navigate("/About")} className="link">Psicoterapia</a>
                <a onClick={() => navigate("/Contact")} className="link">Avaliação Neuropsicológica</a>
                <a onClick={() => navigate("/About")} className="link">Cursos</a>
                <a onClick={() => navigate("/Contact")} className="link">Palestras</a>
            </div>
        </div>

  );
}

export default Header;




