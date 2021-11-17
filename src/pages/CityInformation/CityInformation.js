import React from "react";
import { useParams } from "react-router";
import { useFetch} from "../../Hooks/useFetch";
import sun from "../../assets/sun.svg"
import clearSky from "../../assets/clearSky.svg"
import drizzle from "../../assets/drizzle.svg"
import lightRain from "../../assets/lightRain.svg"
import moderateRain from "../../assets/moderateRain.svg"
import overcastClouds from "../../assets/overcastClouds.svg"
import partlyCloudy from "../../assets/partlyCloudy.svg"
import rain from "../../assets/rain.svg"
import snow from "../../assets/snow.svg"
import thunderstorm from "../../assets/thunderstorm.svg"
import humidite from "../../assets/humidite.svg"
import speedd from "../../assets/speedd.svg"
import temperatur from "../../assets/temperatur.svg"
import temperatureMax from "../../assets/temperatureMax.svg"
import temperatureMin from "../../assets/temperatureMin.svg"


const CityInformation = () =>{
console.log(process.env.REACT_APP_KEY)
    const {city} = useParams() 

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c8d1ae3aad9fb91a34323f07b66af644` 
let {data} = useFetch(url)
    
    
// console.log(data)



return(

    <div className="bg-gradient-to-t from-primary to-back flex justify-center">
    <div  className=" flex-col max-w-sm mx-auto  w-96 bg-gradient-to-t from-primary to-back min-h-screen">
 
    { data ? 
    <article className=" max-h-full maflex-col content-center justify-center text-center text-text pt-10">
     <img className="max-w-1/2 max-h-1/2 inline " src={data.weather[0].description === "few clouds" ? partlyCloudy : 
             data.weather[0].description === "sun" ? sun :
             data.weather[0].description === "partly cloudy" ? partlyCloudy :
             data.weather[0].description === "thunderstorm" ? thunderstorm :
             data.weather[0].description === "broken clouds" ? rain :
             data.weather[0].description === "rain" ? rain :
             data.weather[0].description === "overcast clouds" ? overcastClouds :
             data.weather[0].description === "fog" ? clearSky :
             data.weather[0].description === "clear sky" ? sun :
             data.weather[0].description === "light snow" ? snow :
             data.weather[0].description === "scattered clouds" ? clearSky :
             data.weather[0].description === "light rain" ? lightRain :
             data.weather[0].description === "moderate rain" ? moderateRain :
             data.weather[0].description === "light intensity drizzle" ? drizzle :
             data.weather[0].description === "mist" ? clearSky :
             data.weather[0].description === "snow" ? snow :null
                        }  alt="description"/>
                        {/* min-w-9/10 */}
        <section className="flex content-around self-center justify-around content-center  rounded mx-6 my-4 py-4 px-4 bg-white z-20  "> 
            <div className="flex-col w-16">
                <img className="max-w-3/4 max-h-3/4 inline"  src={temperatur} alt="description"/>
                <h3 className="text-base text-back">{Math.trunc((data?.main.temp)-273.15)+"º"}</h3>
            </div>
            <div className="flex-col w-16">
                <img className="max-w-3/4 max-h-3/4 inline" src={humidite} alt="description"/>
                <h3 className="text-base text-back">{data?.main.humidity}</h3> 
            </div>
            <div className="flex-col w-16">
                <img className="max-w-3/4 max-h-3/4 inline" src={speedd} alt="description"/>
                <h3 className="text-base text-back">{data?.wind.speed}km</h3>
            </div>
        </section>
        <section className="flex-col  rounded top-20  my-0 py-4 px-4  -mt-20 bg-whiteAplha ">
            <div className="flex justify-center ">
                <svg className=" max-w-1/10 max-h-1/10 fill-current mt-14" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><g><path d="M48,0A36.0393,36.0393,0,0,0,12,36c0,32.5078,30.9375,57.6328,32.25,58.6875a6.0134,6.0134,0,0,0,7.5,0C53.0625,93.6328,84,68.5078,84,36A36.0393,36.0393,0,0,0,48,0Zm0,81.9492C40.418,74.707,24,56.6367,24,36a24,24,0,0,1,48,0C72,56.6367,55.582,74.707,48,81.9492Z"/><path d="M48,24A12,12,0,1,0,60,36,12.0157,12.0157,0,0,0,48,24Z"/></g></svg>
                <h2 className="mt-14 text-4xl">{data?.name}</h2>     
            </div>
            <div className="flex justify-between items-center my-4">
                <h3 className="w-32 text-left" >Temperature max</h3>
                <img className="max-w-1/6 max-h-1/6 inline"  src={temperatureMax} alt="description"/>
                <h3 className="w-10">{Math.trunc((data?.main.temp_max)-273.15)+"º"}</h3>
            </div>           
            <div className="flex justify-between items-center my-4">
                <h3  className="w-32 text-left" >Temperature min</h3>
                <img className="max-w-1/6 max-h-1/6 inline"  src={temperatureMin} alt="description"/>
                <h3 className="w-10">{Math.trunc((data?.main.temp_min)-273.15)+"º"}</h3>
            </div>
            <div className="flex justify-between items-center my-4">
                <h3 className="w-32 text-left" >Feels like</h3>
                <img className="max-w-1/6 max-h-1/6 inline"  src={temperatur} alt="description"/>
                <h3 className="w-10">{Math.trunc((data?.main.feels_like)-273.15)+"º"}</h3>
            </div>  
            <div className="flex justify-around items-center my-4">
                 <h3 className="w-32 text-left" >Sea Level</h3> 
                {/* <img className="max-w-1/6 max-h-1/6 inline"  src={sun}/> */}
                <h3 className="">{data.weather[0].description}</h3>
            </div>   
        </section>
    </article>
    :null 
    }
</div> 
</div>
)

}

export default CityInformation;
