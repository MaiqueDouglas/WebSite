import './Banner.css';
import img from "../../assets/banner-1.png";

function Banner(){
    return (
        <div className="container-banner">
            <div className='banner'> 
                <div className='text'>
                    <h1>UMA PSICÓLOGA DE FAMÍLIA</h1>
                    <h1 className='paragrafo'>
                        Tenha ajuda psicológica baseada em evidências<br/>
                        para as suas dificuldades e transtornos emocionais.
                    </h1>
                    <button>Agende sua consulta</button>  
                    <div className='img'>
                <img src={img} alt='imagem'/> 
            </div>              
                </div>         
            </div>
        </div>
    );
}

export default Banner;
