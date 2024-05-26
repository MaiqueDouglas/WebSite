import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import logo from "../../assets/logo.png";

function Header() {
  const navigate = useNavigate();

  return (
    <div className='container-header'>
        <div className='header'>
        <div className="router-links">
                <a onClick={() => navigate("/")} className="link">Home</a>
                <a onClick={() => navigate("/Artigos")} className="link">Artigos</a>
                <a onClick={() => navigate("/Psicoterapia")} className="link">Psicoterapia</a>
                <a onClick={() => navigate("/AvaliaçãoNeuro")} className="link">Avaliação Neuropsicológica</a>
                <a onClick={() => navigate("/Cursos")} className="link">Cursos</a>
                <a onClick={() => navigate("/Palestras")} className="link">Palestras</a>
            </div>
            <div className='logo'>
                <img src={logo} alt='logo'/>
            </div>
            </div>
        </div>

  );
}

export default Header;




