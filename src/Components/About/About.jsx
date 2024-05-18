import './About.css';
import about from "../../assets/about.png";
import InstagramIcon from '../../assets/icons8-instagram.svg';
import WhatsappIcon from '../../assets/icons8-whatsapp.svg';
import Email from '../../assets/icons8-Email.png';

function About(){
    return(
        <div className='container-about'>
            <div className='about'>
            <div className='Icons'>
               <img src={InstagramIcon} alt="Instagram Icon" className="icon1" />
               <img  src={WhatsappIcon} alt="Whatsapp Icon" className="icon2" />
               <img src={Email} alt='Email icon' className='icon3'/>
               
            </div>
                
                <h2>
                Olá, me chamo Hellen Gama<br/>
                </h2>
                <h4>
                    CRP: 00/00000
                </h4>
                <p>
                Viver é uma jornada extraordinária repleta de desafios e conquistas.<br/>
                A cada novo dia, somos presenteados com a oportunidade<br/> 
                de aprender algo novo e crescer como indivíduos.<br/> 
                As pequenas alegrias e as grandes realizações se entrelaçam,<br/>
                criando uma tapeçaria rica de experiências que moldam quem somos.<br/><br/>
                
                O ato de viver também nos ensina a valorizar as conexões humanas.<br/> 
                Os momentos compartilhados com amigos e familiares, as risadas e os abraços,<br/> 
                tudo isso contribui para um senso de pertencimento e felicidade.<br/>
                É nas relações que encontramos apoio e conforto, tornando a vida mais leve e significativa.<br/><br/>
                
                Desafios fazem parte do pacote de viver.<br/> 
                Eles nos testam e muitas vezes nos empurram para fora de nossa zona de conforto.<br/> 
                No entanto, é através desses desafios que descobrimos nossa resiliência e capacidade de superação.<br/>
                Cada obstáculo vencido nos torna mais fortes e confiantes para enfrentar o que vier pela frente.<br/><br/>
                
                Por fim, viver é uma arte que requer equilíbrio.<br/> 
                Encontrar harmonia entre o trabalho e o lazer, entre os desejos pessoais e as responsabilidades,<br/> 
                é fundamental para uma vida plena. Apreciar os pequenos momentos e cultivar a gratidão<br/> 
                são práticas que nos ajudam a manter uma perspectiva positiva e um coração cheio de alegria.
                </p>
                <div className='photo-about'>
                    <img src={about} alt='about'/>
                </div>
            </div>
        </div>
    );
}

export default About;
