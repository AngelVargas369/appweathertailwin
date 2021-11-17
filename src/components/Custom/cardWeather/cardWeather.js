import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"; 
import sun from "../../../assets/sun.svg"
import clearSky from "../../../assets/clearSky.svg"
import drizzle from "../../../assets/drizzle.svg"
import lightRain from "../../../assets/lightRain.svg"
import moderateRain from "../../../assets/moderateRain.svg"
import overcastClouds from "../../../assets/overcastClouds.svg"
import partlyCloudy from "../../../assets/partlyCloudy.svg"
import rain from "../../../assets/rain.svg"
import snow from "../../../assets/snow.svg"
import thunderstorm from "../../../assets/thunderstorm.svg"
import timer from "../../../assets/timer.svg"
import humidite from "../../../assets/humidite.svg"
import speedd from "../../../assets/speedd.svg"
import NotFounds from "../NotFound/NotFounds";


const CardWeather = ({cityName, temp, cambio, weather, time, humidity, speed})=>{

    const [hour, setHour] = useState("")
useEffect(() => {
    let temporizador;
    if(!cambio){
        temporizador = setInterval(() => {
            // let d = new Date();
            // let utc = d.getTime();
            // let nd = new D 
            let hora = (new Date().getHours()+5)+(time/60/60) 
            let min = (new Date().getMinutes())
            // let hora1 = hora > 23 ? hora = hora - 24 : hora
            console.log()
            setHour(`${hora > 23 ? hora = hora - 24 : hora}:${min}`)
            
            
        }, 1000);
    }else{
        clearInterval(temporizador);
        }
    return()=>{
        // console.log("fase de desmontaje");
        clearInterval(temporizador);
    };

}, [cambio, time]);

// console.log(cambio)
    // console.log(cityName)
    // console.log(temp)
    return(
        <div className="flex-col text-center text-text ">
     
         {!cambio ? 
             <>
              <div className="flex justify-center ">
                    {/* <img className=" max-w-1/10 max-h-1/10 fill-current " src={timer}/> 
                     */}
                    <svg className=" max-w-1/10 max-h-1/10 fill-current my-4" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><g><path d="M48,0A36.0393,36.0393,0,0,0,12,36c0,32.5078,30.9375,57.6328,32.25,58.6875a6.0134,6.0134,0,0,0,7.5,0C53.0625,93.6328,84,68.5078,84,36A36.0393,36.0393,0,0,0,48,0Zm0,81.9492C40.418,74.707,24,56.6367,24,36a24,24,0,0,1,48,0C72,56.6367,55.582,74.707,48,81.9492Z"/><path d="M48,24A12,12,0,1,0,60,36,12.0157,12.0157,0,0,0,48,24Z"/></g></svg>
                    <h2 className="text-xl my-4">{cityName}</h2>
                </div>
                <img className="max-w-1/2 max-h-1/2 inline" src={weather[0].description === "few clouds" ? partlyCloudy : 
                weather[0].description === "sun" ? sun:
                weather[0].description === "partly cloudy" ? partlyCloudy  :
                weather[0].description === "thunderstorm" ? thunderstorm  :
                weather[0].description === "broken clouds" ? rain  :
                weather[0].description === "rain" ? rain  :
                weather[0].description === "overcast clouds" ? overcastClouds :
                weather[0].description === "fog" ? clearSky  :
                weather[0].description === "clear sky" ? sun  :
                weather[0].description === "light snow" ? snow  :
                weather[0].description === "scattered clouds" ? clearSky  :
                weather[0].description === "light rain" ?  lightRain :
                weather[0].description === "moderate rain" ? moderateRain  :
                weather[0].description === "mist" ? clearSky :
                weather[0].description === "light intensity drizzle" ? drizzle  :
                weather[0].description === "snow" ? snow  :null
                } alt="description"/>
                <h3 className="text-5xl mt-4">{Math.trunc((temp)-273.15)+"º"}</h3>
                <section className="flex justify-between content-center rounded mx-6 my-4 py-4 px-4 bg-whiteAplha"> 
                    <div className="flex-col w-16">
                        <img className="max-w-3/4 max-h-3/4 inline"  src={timer} alt="description"/>
                        <h3 className="text-base">{hour}</h3>
                    </div>
                    <div className="flex-col w-16">
                        <img className="max-w-3/4 max-h-3/4 inline" src={humidite} alt="description"/>
                        <h3 className="text-base">{humidity}</h3> 
                    </div>
                    <div className="flex-col w-16">
                        <img className="max-w-3/4 max-h-3/4 inline" src={speedd} alt="description"/>
                        <h3 className="text-base">{Math.trunc(speed)}km</h3>
                    </div>
                </section>
                <Link to={`${cityName}`}>
                    <button className="rounded border p-2 hover:bg-whiteAplha focus:bg-whiteAplha">see more</button>
                </Link> 
            </>
                : <NotFounds/>
}
        </div>    
    )
}
export default CardWeather;