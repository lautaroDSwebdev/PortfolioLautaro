import { Header, NavComponent, Navbar, Projects, TitleProjects } from "./components"

export const App = () => { 
    const $app = document.querySelector<HTMLDivElement>(".app")!
    if(!$app) return  null
    $app.appendChild(Navbar())
    $app.appendChild(NavComponent())
    $app.appendChild(Header())
    $app.appendChild(TitleProjects())
    $app.appendChild(Projects())
    
 }  