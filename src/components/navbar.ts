import { navbar } from "../mock/dataNav"

export const Navbar = () => {

    const nav = document.createElement("nav")
    nav.classList.add("navbar-mobile-styles", "z-index-sup")

    nav.innerHTML = `
    ${navbar.map(e => {

        return `
            <div>
                <a class="navAnimation NavPresentacion enlace-navegacion" href="${e.href}">
                ${e.navOption}
                </a>
            </div>
        `
        }).join("")
        }
        `
    return nav
}