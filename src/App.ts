import { Contact, Experience, Header, NavComponent, Navbar, Projects, TechKnowledge, TitleProjects } from "./components"

export const App = () => { 
    const $app = document.querySelector<HTMLDivElement>(".app")!
    if(!$app) return  null
    $app.appendChild(Navbar())
    $app.appendChild(NavComponent())
    $app.appendChild(Header())
    $app.appendChild(TitleProjects())
    $app.appendChild(Projects())
    $app.appendChild(TechKnowledge())
    $app.appendChild(Experience())
    $app.appendChild(Contact())
    
 }  