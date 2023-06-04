import React, { useState } from 'react'
import Cor from "./praticos.jsx";
import { AiOutlineMenu } from 'react-icons/ai'
import { BiArrowFromRight } from 'react-icons/bi'

export default function Topo() {
    const [largura, setLargura] = useState('-100%')
    const [translate, setTranslate] = useState(0)
    const [scale, setScale] = useState(1)

    function mostrar() {
        setLargura('00%')
        setTranslate(translate + 180)
    }
    
    function esconder() {
        
        setScale(2.2)
        setLargura('-100%')
        setTimeout(function () {
            setScale(1)
        }, 610)
    }

    const conteinerStyle_Nav = {
        left: largura
    }

    const conteinerStyle_MenuIcon = {
        transform: `rotateZ(${translate}deg)`
    }

    const conteinerStyle_ArrowIcon = {
        transform: `scaleX(${scale})`
    }

    return (
        <header>
            <h1><a href="http://127.0.0.1:5500/projetos-proprios/logo-ali-antigo/index.html"><Cor cor='rgb(230, 196, 0)'>Logo</Cor><Cor cor='red'>Ali</Cor><Cor cor='rgb(230, 196, 0)'>.</Cor></a></h1>
            <div>
                <div>
                    <AiOutlineMenu id='AiOutlineMenu' onClick={mostrar} style={conteinerStyle_MenuIcon}/>
                </div>
                <nav style={conteinerStyle_Nav}>
                    <BiArrowFromRight id="BiArrowFromRight" onClick={esconder} style={conteinerStyle_ArrowIcon} />
                    <ul>
                        <li><a href="#inicio" onClick={esconder} >Inicio</a></li>
                        <li><a href="#sobre" onClick={esconder} >Sobre</a></li>
                        <li><a href="#lugar" onClick={esconder} >Lugar</a></li>
                        <li><a href="#menu" onClick={esconder} >Menu</a></li>
                        <li><a href="#contato" onClick={esconder} >Contato</a></li>
                    </ul>
                </nav>
            </div>
            
        </header>
    )
}