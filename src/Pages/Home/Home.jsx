import React from "react";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import About from "../../Components/About/About";
import Specialty from "../../Components/Specialty/Specialty";
import Whatsapp from "../../Components/Whastapp/Whatsapp";

function Home(){
    return(
        <div>
            <Header/>
            <Banner/>
            <Specialty/>
            <About/>
            <Whatsapp/>
        </div>

    );

}

export default Home;