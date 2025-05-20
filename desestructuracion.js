//function calcular (a,b) { 
    //const suma = a + b;
    //const resta = a - b;
    //const multiplicacion = a * b;
    //const division = a / b;

    //return[suma,resta,multiplicacion,division];
//}

//const[suma, resta, multiplicacion, division] = calcular(4, 7);

//document.write("<p>Suma: " + suma + "</p>");
//document.write("<p>Resta: " + resta + "</p>");
//document.write("<p>Multiplicacion: " + multiplicacion + "</p>");
//document.write("<p>Division: " + division + "</p>"); 

const vehiculouno = {
    marca: "Ford",
    modelo: "Focus",
    año: 2020,
    color: "Rojo"
};

mivehiculo(vehiculouno);
function mivehiculo({marca, modelo, año, color}) {
    const mensaje = 'Mi ' + vehiculouno.marca + ' es un ' + vehiculouno.modelo + ' ' + vehiculouno.año + ' y es de color ' + vehiculouno.color + '.';
    document.write(mensaje);
}