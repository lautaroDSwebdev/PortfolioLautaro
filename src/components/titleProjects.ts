export const TitleProjects = () => { 
    const div = document.createElement("div")
    const h2 = document.createElement("h2")
    div.classList.add("contenedor-titulo")
    h2.classList.add("g-titles-sections")
    h2.id= "proyectos"
    h2.textContent = "Proyectos"
    div.appendChild(h2)
    return div
 }