import React from "react";

const Form = ({handleCity, handleSearchWeather}) => {

return(

    <form className="flex justify-center text-text pt-10 focus:border-none" action="" onSubmit={e => handleSearchWeather(e)}>
    <input type="text" required="required" placeholder="name of city" className="p-1 rounded-l my-4 focus:bg-whiteAplha  "
    onChange={({target})=>handleCity(target)}/>
    <input type="submit" value="Search" className="rounded-r my-4" ></input>
    </form>

);

}
export default Form;