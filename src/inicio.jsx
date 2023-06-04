import React from "react";
import Cor from './praticos.jsx'

export default function Inicio() {
    return (
        <section id='inicio'>
            <p>
                Estamos bem <Cor cor='red'>aqui</Cor> <br/>
                <Cor cor='yellow'>ou</Cor>  <br/>
                logo <Cor cor='red'>ali</Cor>
            </p>
            <a href="https://api.whatsapp.com/send?phone=5551981803901&text=Ol%C3%A1,%20vim%20pelo%20site%20do%20logo%20ali!!!">
                <div id="button">
                    Fale conosco
                </div>
            </a>
        </section>
    )
}