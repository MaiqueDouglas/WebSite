import './Banner.css';
import img2 from "../../assets/banner-2.png";

function Banner(){
    return (
        <div className="container-banner">
            <div className='img2'>
                <img src={img2} alt='imagem2'/> 
            </div>
            <div className='banner'> 
                <div className='text'>
                    <h1>Uma Psicóloga de Família</h1>
                    <p>
                        Tenha ajuda psicológica baseada em evidências<br/>
                        para as suas dificuldades e transtornos emocionais.
                    </p>
                    <button>Agende sua consulta</button>
                    <div className='icons'>
                        <div className='whatsapp'>
                            <img src="https://img.icons8.com/ios/50/whatsapp--v1.png" alt="whatsapp--v1" width="30" height="30"/>
                            <span>(61) 9 9844 - 3434</span>
                        </div>
                        <div className='insta'>
                            <img width="30" height="30" src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram-new--v1"/>
                            <span>@helengama.neuropsi</span>
                        </div>
                        <div className='e-mail'>
                            <img width="30" height="30" src="https://img.icons8.com/ios/50/new-post--v1.png" alt="new-post--v1"/>
                            <span>neuropsicologa@helengama.com</span>
                        </div>
                    </div>                              
                </div>         
            </div>
        </div>
    );
}

export default Banner;
