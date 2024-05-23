import './HowItWorks.css'
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";

function HowItWorks(){
    return(
         <div className='container-how'>
            <div className='how'>
              <h1 className='h1-titulo'>Como funciona nossa terapia?</h1>
              <h1 className='h1-subtitulo1'>Terapia Presencial</h1>
              <p className='p1'>
              A pequena praça no centro da cidade era um refúgio de tranquilidade. <br></br>
              Com seus bancos de madeira desgastados pelo tempo e árvores frondosas <br></br>
              que ofereciam sombra, era o lugar perfeito para uma pausa. <br></br>
              O som suave da água borbulhando na fonte ao centro e o canto <br></br>
              dos passarinhos criavam uma sinfonia natural que acalmava a mente e o coração.
              </p>
              <img className='img1' src={img1} alt='imagem1'/>
              <h1 className='h1-subtitulo2'>Terapia Online</h1>
              <p className='p2'>
              A pequena praça no centro da cidade era um refúgio de tranquilidade. <br></br>
              Com seus bancos de madeira desgastados pelo tempo e árvores frondosas <br></br>
              que ofereciam sombra, era o lugar perfeito para uma pausa. <br></br>
              O som suave da água borbulhando na fonte ao centro e o canto <br></br>
              dos passarinhos criavam uma sinfonia natural que acalmava a mente e o coração.
              </p>
              <img className='img2' src={img2} alt='imagem2'/>
            </div>
         </div>
    );
}

export default HowItWorks;