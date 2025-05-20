class animal {

    hablar() {
        document.write("primero");
    }
}

class perro extends animal {


    hablar() {
        document.write("segundo");
    }
}

const animal1 = new animal();
const perro1 = new perro();


