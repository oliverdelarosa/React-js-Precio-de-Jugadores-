
import './App.css';
import React from 'react';
import { useState } from 'react';
import Cena from "./Cena";
import ben from "./images/benzema.jpg";
import cris from "./images/cristiano.jpg";
import lapa from "./images/lapadula.jpg";
import lio from "./images/lionel.jpg";
import ram from "./images/ramos.jpg";
import dias from "./images/ruiz.jpg"


const App = () => {
  const reyes=[
    {
        nombre:"benzema",
        color:"blue",
        precio:200

    },{
        nombre:"cristiano",
        color:"white",
        precio:220,
    },{
        nombre:"lapadula",
        color:"green",
        precio:150,
    },{
        nombre:"lionel",
        color:"yellow",
        precio:300,
    },{
        nombre:"ramos",
        color:"red",
        precio:170,
    },{
        nombre:"ruiz",
        color:"orange",
        precio:110,
    }
]
const[total,setTotal]=useState(0);

  return (
    <>
    <h1> total a pagar es: {total}$</h1>
    <div className="cajacentral"> 
    <Cena img={ben} nombre={reyes[0].nombre} color={reyes[0].color}
    precio={reyes[0].precio} setTotal={setTotal} /> 
    <Cena img={cris}nombre={reyes[1].nombre} color={reyes[1].color}
    precio={reyes[1].precio} setTotal={setTotal}/>
    <Cena img={lapa} nombre={reyes[2].nombre} color={reyes[2].color}
    precio={reyes[2].precio} setTotal={setTotal}/>
    <Cena img={lio}nombre={reyes[3].nombre} color={reyes[3].color}
    precio={reyes[3].precio} setTotal={setTotal}/>
    <Cena img={ram}nombre={reyes[4].nombre} color={reyes[4].color}
    precio={reyes[4].precio} setTotal={setTotal}/>
    <Cena img={dias}nombre={reyes[5].nombre} color={reyes[5].color}
    precio={reyes[5].precio} setTotal={setTotal}/>
    </div>
</>


);
}
export default App

