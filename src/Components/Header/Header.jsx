import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  return (
    <div className='container-header'>
        <div className='header'>
            <div className='logo'>

            </div>
            <div className='icons'>
            <div class="whatsapp">
                <img src="https://img.icons8.com/ios/50/whatsapp--v1.png" alt="whatsapp--v1" width="20" height="20"/>
                <span>  (61) 9 9844 - 3434</span>
            </div>
            <div className='telephone'>
                <img width="20" height="20" src="https://img.icons8.com/ios/50/phone--v1.png" alt="phone--v1"/>
                <span>  (61) 9 9844 - 3434</span>
            </div>
            <div className='e-mail'>
                <img width="20" height="20" src="https://img.icons8.com/ios/50/new-post--v1.png" alt="new-post--v1"/>
                <span>  neuropsicologa@helengama.com</span>
            </div>
            </div>
            <div className="router-links">
                <a onClick={() => navigate("/")} className="link">Home</a>
                <a onClick={() => navigate("/Blog")} className="link">Blog</a>
                <a onClick={() => navigate("/About")} className="link">Sobre Nós</a>
                <a onClick={() => navigate("/Contact")} className="link">Contato</a>
            </div>
        </div>
    </div>
  );
}

export default Header;




