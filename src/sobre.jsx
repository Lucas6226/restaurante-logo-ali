import React, { useState } from "react";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";

import { IMAGES } from "./images.js"

export default function Sobre() {
    const [largura_paragrafo_1, setLargura_paragrafo_1] = useState('0%')
    const [padding_paragrafo_1, setPadding_paragrafo_1] = useState('0px 0em 0px 0px')
    const [largura_imagem_1, setLargura_imagem_1] = useState('100%')
    // const [padding_imagem_1, setPadding_imagem_1] = useState('0px 0px 0px 0em')

    const [largura_paragrafo_2, setLargura_paragrafo_2] = useState('0%')
    const [padding_paragrafo_2, setPadding_paragrafo_2] = useState('0px 0em 0px 0px')
    const [largura_imagem_2, setLargura_imagem_2] = useState('100%')
    // const [padding_imagem_2, setPadding_imagem_2] = useState('0px 0px 0px 0em')

    const [largura_paragrafo_3, setLargura_paragrafo_3] = useState('0%')
    const [padding_paragrafo_3, setPadding_paragrafo_3] = useState('0px 0em 0px 0px')
    const [largura_imagem_3, setLargura_imagem_3] = useState('100%')
    // const [padding_imagem_3, setPadding_imagem_3] = useState('0px 0px 0px 0em')

    const dados = [
        {
            texto: 'texto-1', 
            img: IMAGES.carne,
            style_paragrafo: {
                width: largura_paragrafo_1,
                padding: padding_paragrafo_1
            },
            style_imagem: {
                width: largura_imagem_1,
            },
            clicou: () => {
                if (largura_paragrafo_1 == '0%') {
                    setLargura_paragrafo_1('100%')
                    setLargura_imagem_1('0%')
                    
                    setPadding_paragrafo_1('0px 4em 0px 0px')
                } else {
                    setLargura_paragrafo_1('0%')
                    setLargura_imagem_1('100%')

                    setPadding_paragrafo_1('0px')
                }
            }
        },
        {
            texto: 'texto-2',
            img: IMAGES.donuts,
            style_paragrafo: {
                width: largura_paragrafo_2,
                padding: padding_paragrafo_2
            },
            style_imagem: {
                width: largura_imagem_2,
            },
            clicou: () => {
                if (largura_paragrafo_2 == '0%') {
                    setLargura_paragrafo_2('100%')
                    setLargura_imagem_2('0%')
                    
                    setPadding_paragrafo_2('0px 4em 0px 0px')
                    setPadding_imagem_2('0px')
                } else {
                    setLargura_paragrafo_2('0%')
                    setLargura_imagem_2('100%')

                    setPadding_paragrafo_2('0px')
                    setPadding_imagem_2('0px 0px 0px 4em')
                }
            }
        },
        {
            texto: 'texto3',
            img: IMAGES.torneiras,
            style_paragrafo: {
                width: largura_paragrafo_3,
                padding: padding_paragrafo_3
            },
            style_imagem: {
                width: largura_imagem_3,
            },
            clicou: () => {
                if (largura_paragrafo_3 == '0%') {
                    setLargura_paragrafo_3('100%')
                    setLargura_imagem_3('0%')
                    
                    setPadding_paragrafo_3('0px 4em 0px 0px')
                    setPadding_imagem_3('0px')
                } else {
                    setLargura_paragrafo_3('0%')
                    setLargura_imagem_3('100%')

                    setPadding_paragrafo_3('0px')
                    setPadding_imagem_3('0px 0px 0px 4em')
                }
            }
        },
    ]
    
    return (
        <section id="sobre">
            {dados.map((conteudo => (
                <div className="caixa" key={conteudo.texto}>
                    <div className="imagem" style={conteudo.style_imagem}>
                        <HiOutlineArrowCircleLeft className="icon-img" onClick={conteudo.clicou}/>
                        <img src={conteudo.img} alt="" />
                    </div>
                    <div className="informacao" style={conteudo.style_paragrafo}>
                        <HiOutlineArrowCircleRight className="icon-inf" onClick={conteudo.clicou}/>
                        <p>{conteudo.texto}</p>
                    </div>
                </div>
            )))}

        </section>
    )
}