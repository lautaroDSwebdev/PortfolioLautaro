// import { dataApp } from "../../mock"

import { dataApp } from "../mock"
import ArrayTech from "../mock/Tecnologias"


const { sobreMi } = dataApp.es

export const TechKnowledge = () => {

    const $section = document.createElement("section")


    $section.classList.add( "max-width-container")
    $section.innerHTML = /*html*/ `


                <div id="tech" class="g-titles-sections contenedor-titulo g-div-title-section" >
                    <h2 >${sobreMi.tecnologias}</h2>
                </div>

                <article class= "article_arraytech  max-width-container" >
                ${ArrayTech.map(e => {
            return `<section  class="animacionView blue-light-bg  
                    dimensiones-cajas-tech shadow-tech" >
                    <div class="div_img-tech" >
                        <img class="ancho-imagenes-tech " src="${e.img}" />
                    </div>
                    <p class="${e.tecnologia ? "p_padding" : ""}"> ${e.tecnologia ? e.tecnologia : ""}</p>
                </section>
                    `
            }   
                ).join("")}
                
            `
            return $section
}
