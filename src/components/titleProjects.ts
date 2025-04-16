export const TitleProjects = () => { 
    const div = document.createElement("div")
    const h2 = document.createElement("h2")
    h2.classList.add("g-titles-sections","contenedor-titulo","g-div-title-section")
    h2.id= "proyectos"
    h2.textContent = "Proyectos"
    div.appendChild(h2)
    return div
 }