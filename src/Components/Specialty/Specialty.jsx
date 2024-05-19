import './Specialty.css';
import conjugal from "../../assets/conjugal.jpeg";
import familiar from "../../assets/familiar.jpeg";
import neuro from "../../assets/neuro.jpeg";
import avaliação from "../../assets/avaliação.jpeg";


function Specialty(){
    return(
        <div className='container-specialty'>
            <h1>Especialidades</h1>
            <div className='specialty'>
               <div className='conjugal'>
               <img src={conjugal} alt='terapia conjugal'/>
               </div>
               <div className='familiar'>
               <img src={familiar} alt='terapia familiar'/>
                </div>
                <div className='neuro'>
                <img src={neuro} alt='neuro'/>
                </div>
                <div className='avaliação'>
                <img src={avaliação} alt='avaliação'/>
                </div>            
              
            </div>
        </div>

    );
}

export default Specialty;