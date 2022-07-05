import React from 'react'

import App from './App';



function Cena ({img,nombre,precio,color,setTotal}) {    
const comprar =(elementos)=>{
    setTotal((e)=>e+precio);
    elementos.target.parentNode.parentNode
    .parentNode.style.display="none";
}
  return (
    <>
    <div className="rey" style={{backgroundColor:color}}>
     
    <h1>{nombre}</h1>
    <img src={img}/>
    
    <div className="titulo" >Precio:</div>
    <div className="precio"> 
     {precio}
    
    
    <div>
        <button onClick={comprar}> Comprar</button>
    </div>

 </div>
 </div>
    </>
  )
}

export default Cena;
