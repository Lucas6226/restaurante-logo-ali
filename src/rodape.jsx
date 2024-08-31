import React from 'react';
import Cor from './praticos.jsx';

import { BsInstagram } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { SiVsco } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";



export default function RodaPe() {
    return (
        <footer>
            <h2>Fale <Cor cor='rgb(230, 196, 0)'>diretamente</Cor> com um de <Cor cor='red'>nossos</Cor> atendentes</h2>

            <section id='contatos'>
                    <p>apenas a um <Cor cor='rgb(230, 196, 0)'>clique</Cor> de distancia</p>
                    <a href="https://api.whatsapp.com/send?phone=5551999999999&text=Ol%C3%A1,%20vim%20pelo%20site%20do%20logo%20ali!!!">
                        <div id="button">
                            Fale conosco <BsWhatsapp id='button-icon'/>
                        </div>
                    </a>
                    <p>nos acompanhe pelas nossas <Cor cor='rgb(230, 196, 0)'>redes</Cor>.</p>
                    <div id='redes'>
                        <a href="https://www.instagram.com" target='_blank'><BsInstagram className='icons'/></a>
                        <a href="https://twitter.com" target='_blank'><FaTwitterSquare className='icons'/></a>
                        <a href="https://vsco.co" target='_blank'><SiVsco className='icons'/></a>
                    </div>
            </section>
        </footer>
    )
}