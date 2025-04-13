import { dataApp } from "../mock"

export const Projects = () => {

    const { proyectos } = dataApp.es
    const $section = document.createElement("section")

    $section.classList.add("g-rounded", "grid-projects", "max-width-container")
    $section.innerHTML = `
                ${proyectos.map(e =>
        `
                    <article class="item-proyecto shadow-tech-desk blue-light-bg">
                        <div class="imagen-proyecto">
                            <a target="_blank" href="${e.linkweb}">
                            <img
                                
                                src="${e.imagenProyecto}"
                                alt="imagen de proyecto"
                            />
                            </a>
                        </div>
                        <section>
                            <a target="_blank" href="${e.linkweb}">
                                <p class="title_project">${e.tituloProyecto}</p>
                            </a>        
                            <section class="tecnologias-usadas">
                                ${e.TechUsada.map(e => `<p class="blue-bg-very-strong">${e.nombre}</p>`
                                ).join("")}
                            </section>      
                            <div class="enlaces">
                                ${e.linkweb ? `<a target="_blank" href="${e.linkweb}" class="buttons">web</a> ` : ""}
                                ${e.linkRepo ? `<a target="_blank" href="${e.linkRepo}" class="buttons">codigo</a> ` : ""}
                            </div>
                        </section>
                    </article>
                    `
    )}
`
    return $section

}