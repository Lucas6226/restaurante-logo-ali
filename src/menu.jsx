import React from "react";
import { IMAGES } from "./images"


export default function Menu() {
    
    const cards = [
        {
            id: "0",
            name: 'pratos', 
            back_img: IMAGES.pratos,
            linK: ''
        },
        {
            id: "1",
            name: 'doçes', 
            back_img: IMAGES.doces,
            linK: ''
        },
        {
            id: "2",
            name: 'drinks', 
            back_img: IMAGES.drinks,
            linK: ''
        }
    ]
    
    return (
        <section id="menu">
            {cards.map((card => (
                <div className="card" key={card.id}>
                    <img src={card.back_img} alt="" className="background-icons"/>
                    <div>
                        <h2>{card.name}</h2>
                        <a href={card.linK}><p>Saiba mais</p></a>
                    </div>
                </div>
            )))}
        </section>
    )
}