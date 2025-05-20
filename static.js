class vehiculo {
    constructor(nombre) {
        this.nombre = nombre;
    
    }
    static hola() {
        return "!Hola¡"
    }
}

const micoche = new vehiculo ("Ford");
document.write (micoche.nombre); 