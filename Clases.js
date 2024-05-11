//Ejemplo practico que hice en un examen tecnico sobre las clases en js.

class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    getDetalles() {
        console.log(`Nombre: ${this.nombre}, Apellido: ${this.apellido}, Edad: ${this.edad}`);
    }
}

class Jugador extends Persona {
    constructor(nombre, apellido, edad, posicion) {
        super(nombre, apellido, edad);
        this.posicion = posicion;
    }

    getDetalles() {
        super.getDetalles();
        console.log(`Posición: ${this.posicion}`);
    }
}

class Entrenador extends Persona {
    constructor(nombre, apellido, edad, experiencia, idFederacion = Math.floor(Math.random() * 90000) + 10000) {
        super(nombre, apellido, edad);
        this.experiencia = experiencia;
        this.idFederacion = idFederacion;
    }

    getDetalles() {
        super.getDetalles();
        console.log(`Años de experiencia: ${this.experiencia}, ID de federación: ${this.idFederacion}`);
    }
}

class Equipo {
    constructor(entrenador, jugadores) {
        this.entrenador = entrenador;
        this.jugadores = jugadores;
    }

    getDetalles() {
        console.log("Detalles del entrenador:");
        this.entrenador.getDetalles();

        console.log("Detalles de los jugadores:");
        this.jugadores.forEach(jugador => {
        jugador.getDetalles();
        });
    }
}

let jugadores = [
    new Jugador("Martin", "Ricciardi", 19, "Medio"),
    new Jugador("Paulo", "Diaz", 28, "Defensa"),
    new Jugador("Franco", "Armani", 36, "Portero"),
    new Jugador("Julian", "Alvarez", 24, "Delantero")
];

let entrenador = new Entrenador("Marcelo", "Gallardo", 47, 10);

let equipo = new Equipo(entrenador, jugadores);

equipo.getDetalles();