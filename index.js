let c = 0;

const titulo = document.getElementById("titulo");
const boton = document.getElementById("btn");

boton.addEventListener('click',misInstrucciones)


if (titulo.classList.contains('prueba')) {
    console.log("existe");
    titulo.classList.remove('prueba');
    titulo.classList.add('rojo');
    titulo.innerHTML = "Chau"
}


function misInstrucciones() {
    console.log("hice lol "+c);
    c = c +1;
}