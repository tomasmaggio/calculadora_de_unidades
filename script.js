const a =  document.getElementById('numero2');
const b = document.getElementById('numero1');

var producto = 0;
const btn = document.getElementById('btn');
btn.addEventListener('click',hacerClic);
function hacerClic(){
    var a =  document.getElementById('numero2').value;
    var b = document.getElementById('numero1').value;
    producto = parseInt(a)+parseInt(b);
    document.getElementById("resultado").innerHTML = producto;
}







const  not1 = document.getElementById('nota1');
const  not2 = document.getElementById('nota2');
 const  not3 = document.getElementById('nota3');
let total= 0;
let promedio = 0;
const boton = document.getElementById('boton');
boton.addEventListener('click',HacerClick);
function HacerClick(){
    let not1 = document.getElementById('nota1').value;
    let not2 = document.getElementById('nota2').value;
    let not3 = document.getElementById('nota3').value;
    total = parseInt(not1)+parseInt(not2)+parseInt(not3);
    promedio = total/3;
    document.getElementById("promedio").innerHTML = promedio;

    if (promedio<7){
        titulo.classList.remove("verde");
        titulo.classList.add("rojo");
    }else{
        titulo.classList.remove("rojo");
        titulo.classList.add("verde");
    }






}
const azul = document.getElementById('azul');
azul.addEventListener('click',AZUL);
function AZUL(){
    fondo.classList.remove("amarillo")
    fondo.classList.add("azul");
    fondo.classList.remove("naranja")
}

const amarillo = document.getElementById('amarillo');
amarillo.addEventListener('click',AMARILLO);
function AMARILLO(){
    fondo.classList.remove("azul")
    fondo.classList.add("amarillo");
    fondo.classList.remove("naranja")
}

const naranja = document.getElementById('naranja');
naranja.addEventListener('click',NARANJA);
function NARANJA(){
    fondo.classList.remove("amarillo")
    fondo.classList.remove("azul")
    fondo.classList.add("naranja");
}