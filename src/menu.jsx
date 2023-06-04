import React from "react";

export default function Menu() {
    
    const cards = [
        {
            id: "0",
            name: 'pratos', 
            back_img: '../assets/pratos.svg',
            linK: ''
        },
        {
            id: "1",
            name: 'doçes', 
            back_img: '../assets/doçes.svg',
            linK: ''
        },
        {
            id: "2",
            name: 'drinks', 
            back_img: '../assets/drinks.svg',
            linK: '../drinks/drinks.html'
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