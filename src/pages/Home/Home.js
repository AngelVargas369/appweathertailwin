import React, { useState } from "react";
import Form from "../../components/Custom/Form"
import { useFetch } from "../../Hooks/useFetch";
import CardWeather from "../../components/Custom/cardWeather/cardWeather";
import Initiation from "../../components/Initiation/Initiation";

const Home = () => {
//hooks
    const [cityName, setCityName] = useState("");
    const [search, setSearch] = useState("");
//funciones
    const handleCity = ({value}) =>{
        setCityName(value);
    }
        const handleSearchWeather =(e) =>{
            e.preventDefault();
            setSearch(cityName);
        }
        // c8d1ae3aad9fb91a34323f07b66af644

        // console.log(process.env.REACT_APP_KEY)

// console.log(cityName)  ${process.env.REACT_APP_API_KEY}

let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c8d1ae3aad9fb91a34323f07b66af644`
let {data, isPending} = useFetch(url)

//  console.log(data)
//  console.log(isPending)
//  console.log(flag)
// console.log(isPending)
// error && console.log(error.err)


    return(
        <div className="bg-green-700 to-back flex justify-center">
            <div className=" flex-col max-w-sm mx-auto  w-96 bg-gradient-to-r from-indigo-500  to-back min-h-screen">
           <Form
           handleCity={handleCity}
           handleSearchWeather={handleSearchWeather}
           /> 
        {data ? (

            <CardWeather
            cityName={data.name}
            temp={data.main.temp}
            weather={data.weather}
            cambio={isPending}
            humidity={data.main.humidity}
            time={data.timezone}
            speed={data.wind.speed}
            />
        
        ):  <Initiation/> 
            }
          </div>
        </div>
    )
}
export default Home;