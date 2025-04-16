import { dataApp } from "../mock"

export const Experience = () => {

const $section = document.createElement("section")

$section.id = "sobremi"
$section.classList.add("g-titles-sections", "my-margin-secciontexto-global")

const { sobreMi} = dataApp.es

$section.innerHTML = `<article
        class="animacionView box-shadow-aboutme  blue-light-bg  max-width-container article_myexperience">

        <div class="">
            <article class="subarticle_myexperience">
                <div class=" texts-white">
                    <h3 class="  title_aboutme" aria-description="${sobreMi.experiencia}">  "${sobreMi.experiencia}"</h3>
                    <b class="">Queriendo encontrar un rumbo en mi vida luego de abordar algunas carreras que me desinteresaban, opté por convertirme en programador debido a mi cercania por las computadoras y mi gusto por las matematicas, por lo cual elegí orientarme por <i >Programacion Web</i> en el año 2022.</b>

                    <b class=""> Actualmente soy un estudioso y apasionado <i >Desarrollador</i>   que le encanta colaborar con otros desarrolladores y orientar a nuevos en este frustrante pero lindo camino</b>
                    <b class="">Me es muy reconfortante explicar algo que domino a alguien principiante, es por eso que sigo mejorando y ayudando a mas gente con mucho cariño</b>
                    <p class=""></p>
                    <p class=""></p>
                    <p class=""></p>

                </div>
            </article>
            <article class=" article_img ">
                <img class="my_selfie_style"
                    src="${sobreMi.selfie}" alt="mi-selfie" />
            </article>
        </div>
    </article>
`

return $section
}
