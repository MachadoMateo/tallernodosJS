//EJERCICIO 1
var etiquetaH1 = document.createElement("h1");
etiquetaH1.textContent = "My Presentation";
var div = document.getElementById("miDiv");
div.before(etiquetaH1);
div.style.border = "1px solid";

//EJERCICIO 2
var etiquetaP = document.createElement("p");
etiquetaP.textContent = "My best friend is Mickey";
div.appendChild(etiquetaP);

//EJERCICIO 3
etiquetaH1.style.color = "blue";
etiquetaP.style.fontWeight = "bold";
etiquetaP.style.background = "pink";

//EJERCICIO 4
var listaOrdenada = document.querySelector("ol");
var listaDesordenada = document.createElement("ul");
listaDesordenada.innerHTML = listaOrdenada.innerHTML;
listaDesordenada.classList.add("lista");
listaOrdenada.replaceWith(listaDesordenada);

//EJERCICIO 5
var titulo = document.getElementById("titulo");
titulo.classList.add("tituloh2");





//EJERCICIO 6
var prepararAlmuerzo = document.querySelector("li:nth-of-type(4)");
var nuevoLi = document.createElement("li");
nuevoLi.textContent = "Recoger a los niños";
prepararAlmuerzo.insertAdjacentElement("afterend", nuevoLi);

var elementos = document.querySelectorAll("li");
var elementosLista = {
    "Desayunar": "cumplido",
    "Preparar el almuerzo": "cumplido",
    "Recoger a los niños": "cumplido"
};

elementos.forEach(li => {
    var contenido = li.textContent;
    if(contenido in elementosLista){
        li.classList.add(elementosLista[contenido]);
    }
});

var otrosElementos = {
    "Ir al banco": "fallido",
    "Hacer el mercado": "fallido"
};

elementos.forEach(li2 => {
    contenido2 = li2.textContent;
    if(contenido2 in otrosElementos){
        li2.classList.add(otrosElementos[contenido2]);
    }
});

//EJERCICIO 7
var clasePs = document.querySelectorAll("p.ps");
clasePs.forEach(parrafo =>{
    parrafo.style.color = "green";
    parrafo.style.fontSize = "48px";
})