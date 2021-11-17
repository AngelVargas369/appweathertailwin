import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './pages/Home/Home.js';
import './App.css';
import CityInformation from "./pages/CityInformation/CityInformation.js";

function App() {
  return (

     <BrowserRouter >
     <Switch > 
      <Route path="/weather" exact>
      <Home/>
      </Route>
      <Route path="/:city" exact>
      <CityInformation/>
      </Route>
    </Switch> 
    
    </BrowserRouter>

  );
}

export default App;

// https://api.openweathermap.org/data/2.5/weather?q=giron&appid=c8d1ae3aad9fb91a34323f07b66af644

// c8d1ae3aad9fb91a34323f07b66af644