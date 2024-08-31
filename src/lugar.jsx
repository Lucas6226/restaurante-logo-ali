import React from "react";
import { IMAGES } from "./images";

export default function Lugar() {
  return (
    <section id="lugar">
      <div id="paragrafo">
        <p>
          sum dolor sit amet consectetur adipisicing elit. Sequi, quaerat
          praesentium repellendus, sed recusandae voluptates ratione odio
          laudantium repellat mollitia vel porro veniam aliquam quisquam vero
          culpa amet aspernatur quibusdam! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Fugit facilis, natus aliquid amet
          dignissimos officia quo rerum, aspernatur dolorum eveniet delectus
          voluptatum repellendus voluptas eius nulla est incidunt possimus!
          Molestiae!
        </p>
      </div>
      <div id="img-lugar">
        <img src={IMAGES.bebidas} alt="imagem do bar" />
      </div>
    </section>
  );
}
