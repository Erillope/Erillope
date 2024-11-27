const llenarBarra = (width, name) => {
    let contador = 0;
    let progressBar = document.getElementsByClassName(name)[0]
    let intervalo = setInterval(() => {
        contador++;
        progressBar.style.width = `${contador}%`
        if (contador === width) {
            clearInterval(intervalo);
        }
    }, 20);
    
}
let animacionBarra = () => {
    const seccion = document.getElementById("habilidades");
    const rect = seccion.getBoundingClientRect();
    if (rect.top+250 <= window.innerHeight && rect.top-250 >= -window.innerHeight) {
        llenarBarra(70, "html-item")
        llenarBarra(90, "java-item")
        llenarBarra(90, "py-item")
        llenarBarra(80, "javascript-item")
        window.removeEventListener('scroll', animacionBarra);
    }  
}

window.addEventListener('scroll', animacionBarra);