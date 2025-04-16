export const Contact = () => {

    document.addEventListener("click", (e: MouseEvent) => {
        const $svg = document.querySelector(".svg_clip")  as SVGAElement
        const target = e.target as HTMLElement;
        if (target.matches(".svg_clip")) {
            // Obtener el campo de texto
            const copyText = document.getElementById("myInput") as HTMLInputElement | null;
            if (!copyText) return;
            if (!$svg) return;
            
            // Seleccionar el texto
            copyText.select();
            copyText.setSelectionRange(0, 99999); // Para dispositivos móviles
            $svg.style.fill = "#ff9"
            // Copiar el texto al portapapeles
            navigator.clipboard.writeText(copyText.value);
            console.log("Texto se copió con éxito");
        }
    });


    const $section = document.createElement("section")

    $section.id = "contacto"
    $section.classList.add("section_contact", "blue-light-bg", "shadow-tech-desk")
    $section.innerHTML = /*html*/`
    <input  type="text" value="lautarodisalvo5@gmail.com" id="myInput">
        <svg class="svg_clip" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #fff">
    <path d="M19 3h-2.25a1 1 0 0 0-1-1h-7.5a1 1 0 0 0-1 1H5c-1.103 0-2 .897-2 2v15c0 1.103.897 2 2 2h14c1.103
     0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 17H5V5h2v2h10V5h2v15z"></path>
     </svg>
    <p class="message_p">Copia mi email</p>
    <a>
    
    </a>
    
    `
    return $section
}
