import React,{useState,Fragment} from "react";


const Saludar=()=>{
    const [mensaje,setMensaje]=useState('HOLA MUNDO!!!');
    const [clean,setClean]=useState('MOSTRAR MENSAJE');
    
    const cambiarMensaje=(nuevoMensaje,nuevoBorrar)=>{
        setMensaje(nuevoMensaje)
        setClean(nuevoBorrar)
        var parrafo=document.getElementById("saludo");
        parrafo.style.color="black";
        var boton=document.getElementById("boton");
        parrafo.style.backgroundColor="white";
    }
    
return (
<Fragment>
<h3>Mensaje :<strong className={mensaje.length >= 6 ? 'verde' : 'rojo'}>{mensaje}</strong></h3>
<input type="text" onChange={e=>cambiarMensaje(e.target.value,"BORRAR MENSAJE")} placeholder="cambiaMensaje"/>
<button onClick={e=>cambiarMensaje("HOLA MUNDO!!!","MOSTRAR MENSAJE")}>{clean}</button>
</Fragment>
);}

export default Saludar;

