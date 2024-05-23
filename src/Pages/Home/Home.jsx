import React from "react";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import About from "../../Components/About/About";
import Specialty from "../../Components/Specialty/Specialty";
import Whatsapp from "../../Components/Whastapp/Whatsapp";
import HowItWorks from "../../Components/HowItWorks/HowItWorks";

function Home(){
    return(
        <div>
            <Header/>
            <Banner/>
            <HowItWorks/>
            <Specialty/>
            <About/>
            <Whatsapp/>
        </div>

    );

}

export default Home;