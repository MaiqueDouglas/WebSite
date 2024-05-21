import './Specialty.css';
import conjugal from "../../assets/conjugal.png";
import familiar from "../../assets/familiar.png";
import neuro from "../../assets/neuro.png";
import avaliação from "../../assets/avaliação.png";


function Specialty(){
    return(
        <div className='container-specialty'>
            
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