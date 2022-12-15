import { useState } from 'react'
import React from 'react';
import users from '../users.json'


const CardUno = () => {

    const randomNumeber = Math.floor(Math.random() * users.length)
    const newRandom = Math.floor(Math.random() * users.length)
    const [index, setIndex] = useState(Math.floor(Math.random() * randomNumeber))
    const nombre = users[index].name.first + " " + users[index].name.last
    const photo = users[index].picture.large

    const cambioUsuario = () =>{
             setIndex(newRandom)
        }

    return (
        <div>
            <h1> {nombre}</h1>
            <div>
               <img src={photo} alt="" /> 
            </div>
            <button onClick={cambioUsuario}>Cambio de usuario</button>
        </div>
    );
};

export default CardUno;