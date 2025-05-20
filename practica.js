
class Nombre {
    constructor(nombre) {
        this.nombre = nombre;
    }
    
    mostrarNombre() {
        return "Mi nombre es: " + this.nombre;
    }
}
class Apellido extends Nombre {
    constructor(nombre, apellido) {
        super(nombre);
        this.apellido = apellido;
    }
    
    mostrarApellido() {
        return "Mi apellido es: " + this.apellido;
    }
    
    mostrarCompleto() {
        return this.mostrarNombre() + " y " + this.mostrarApellido();
    }
}
const persona = new Apellido("Juan", "Forero");



document.write(persona.mostrarCompleto());