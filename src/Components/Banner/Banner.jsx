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
                    <h1 className='paragrafo'>
                        Tenha ajuda psicológica baseada em evidências<br/>
                        para as suas dificuldades e transtornos emocionais.
                    </h1>
                    <button>Agende sua consulta</button>                
                </div>         
            </div>
        </div>
    );
}

export default Banner;
