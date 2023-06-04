import React from 'react'

import Inicio from './inicio.jsx';
import Sobre from './sobre.jsx';
import Lugar from './lugar.jsx';
import Menu from './menu.jsx';



export default function Corpo() {
    return (
        <main>
            
            <Inicio/>
            
            <div className="divisor"></div>

            <Sobre/>

            <div className="divisor"></div>

            <Lugar/>

            <div className="divisor"></div>

            <Menu/>

            <div className="divisor"></div>
            
        </main>
    )
}