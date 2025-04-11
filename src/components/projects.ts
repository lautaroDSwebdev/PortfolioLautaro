import { dataApp } from "../mock"

export const Projects = () => {

    const { proyectos } = dataApp.es
    const $section = document.createElement("section")
    const $article = document.createElement("article")

    $section.classList.add("contenedor-proyectos")
    $article.classList.add("contenedor-principal")
    $section.appendChild($article)


    $article.innerHTML = `
                ${proyectos.map(e =>
        `
                    <article class="item-proyecto">
                    <div class="imagen-proyecto">
                        <a target="_blank" href="${e.linkweb}">
                        <img
                            class="imagen"
                            src="${e.imagenProyecto}"
                            alt="imagen de proyecto"
                        />
                        </a>
                    </div>
                    <section>
                        <a target="_blank" href="${e.linkweb}">
                        <div>
                            <p class="title_project">${e.tituloProyecto}</p>
                        </div>
                        </a        
                        <i class="estado-proyecto">${e.en_proceso ? "en proceso" : ""}</i>       
                        <div class="tecnologias-usadas">
                        ${e.TechUsada.map(e => {
            return `<p class="tecnologia">${e.nombre}</p>`
        }).join("")}
                        </div      
                        <div class="enlaces">
                            ${e.linkweb ? `<a target="_blank" href="${e.linkweb}" class="buttons">web</a> ` : ""}
                            ${e.linkRepo ? `<a target="_blank" href="${e.linkRepo}" class="buttons">codigo</a> ` : ""}
                        </div>
                    </section>
                    </article>
                    `
    )}
`
    console.log($section)
    return $section

}