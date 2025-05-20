const numeros = [45, 4, 9, 16, 25];

const numeros2 = numeros.map(mifuncion);

document.getElementById("demo").innerHTML = numeros2;

function mifuncion(valor, indice, array) {
    return valor * 2 + indice + array.length;
}