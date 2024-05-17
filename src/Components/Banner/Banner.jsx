import './Banner.css';
import img1 from "../../assets/banner-1.png";
import img2 from "../../assets/banner-2.png";

function Banner(){
    return(
        <div className="container-banner">
             <div className='img2'>
                    <img src={img2} alt='imagem2'/> 
                </div>
            <div className='banner'> 
            <div className='text'>
                    <h1>
                      PSICOTERAPIA ONLINE
                    </h1>
                    <p>
                    Tenha ajuda psicológica baseada em evidências<br></br>
                    para as suas dificuldades e transtornos emocionais.
                    </p>
                    <button>
                        Agende sua consulta
                    </button>
                </div>               
                <div className='img1'>
                    <img src={img1} alt='imagem1'/> 
                </div>
               
            </div>         
        </div>

    );
}

export default Banner;