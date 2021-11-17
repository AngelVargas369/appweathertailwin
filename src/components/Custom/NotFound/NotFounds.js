// import react from "react";

import sun1 from "../../../assets/svg/initiation/sun1.svg"



const NotFounds = () =>{


    return(
        <div className="text-center mt-0 flex-col">
            <img className="object-none object-center h-40 w-full" src={sun1} alt="weather"/>
            <h2 className="text-5xl mx-12 mb-8 font-bold text-text">CIUDAD NO ENCONTRADA <span className="text-yellow">BUSCALA DE NEUVO</span></h2>
            <p className="mx-12 text-text"></p>
            
        </div>

    )
}

export default NotFounds;