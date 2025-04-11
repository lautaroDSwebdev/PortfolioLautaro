import { navbar } from "../mock/dataNav"



export const NavComponent = () => {
    const nav = document.createElement("nav")
    const div = document.createElement("div")

    let render = ""
    console.log(navbar)

    nav.classList.add("nav_style", "z-index-sup", "alturaNav")
    div.classList.add("max-width-container")
    
    navbar.map(e => {
        render += `
                <a  href="${e.href}">${e.navOption}</a>
                    `
    })
    console.log(render)
    div.innerHTML = render
    nav.appendChild(div)

    return nav
}
