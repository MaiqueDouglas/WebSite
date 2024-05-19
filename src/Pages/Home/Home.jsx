import React from "react";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import About from "../../Components/About/About";
import Specialty from "../../Components/Specialty/Specialty";

function Home(){
    return(
        <div>
            <Header/>
            <Banner/>
            <Specialty/>
            <About/>
        </div>

    );

}

export default Home;