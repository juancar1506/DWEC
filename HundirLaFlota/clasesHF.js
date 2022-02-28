class Persona {

    constructor(nombre, apellido, edad, genero) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._genero = genero;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(valor) {
        this._nombre = valor;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(valor) {
        this._apellido = valor;
    }

    get edad() {
        return this._edad;
    }
    set edad(valor) {
        this._edad = valor;
    }


    static Fecha() {
        let dia = new Date();
        return dia.getHours() + ':' + dia.getMinutes() + ':' + dia.getSeconds();
    }
	#cambiarNombre(valor) {
        return this.nombre = valor;
    }
	#cambiarApellido(valor) {
        return this.nombre = valor;
    }
    toString() {
        return this.nombre + ' ' + this.apellido;
    }

    predefinido() {
        return this.#cambiarNombre('Juan Carlos') + ' ' + this.#cambiarApellido('Tauroni Roldan');
    }
    valueOf() {
        return parseInt(this._edad);
    }



}
class Autor extends Persona {
    constructor(nombre, apellido, edad, genero, redes) {
        super(nombre, apellido, edad, genero);
        this.redes = redes;
    }

    get redes() {
        return this._redes;
    }

    set redes(valor) {
        this._redes = valor;
    }


    #cambiarNombre(valor) {
        return this._nombre;
    }
	#cambiarApellido(valor) {
        return this._nombre;
    }

    predefinirNombre() {
        return this.#cambiarNombre('Autor') + ' ' + this.#cambiarApellido('Tauroni Roldan');
    }
    toString() {
        return super.toString();
    }

    valueOf() {
        return parseInt(this.redes);
    }
    static Libre() {
        alert('Libre de derechos de autor');
    }
}

class Jugador extends Persona {
    constructor(nombre, apellido, edad, idJugador) {
        super(nombre, apellido, edad);
        this.idJgador = idJugador;
    }

    get idJugador() {
        return this._idJugador;
    }

    set idJugador(valor) {
        this._idJugador = valor;
    }

    #aciertos(aciertos) {
        return aciertos;

    }

    #fallos(fallos) {
        return fallos;

    }

    puntuacion(dato1, dato2) {
        return "barcos hundidos: " + this.#aciertos(dato1) + " barcos no hundido: " + this.#fallos(dato2) +
            ' total:' + (this.#aciertos(dato1) + this.#fallos(dato2));
    }


    toString() {
        return super.toString();
    }
    valueOf() {
        return parseInt(this._idJugador);
    }
    static Victoria() {
        alert('Has ganado!!!!!!!!!');
    }
}
Autor.prototype.completarInfoAutor = function() {
    this.nombre = 'Juan Carlos';
    this.apellido = 'Tauroni Roldan';
    this.edad = 19;
    this.redes = 'Github juancar1506';
}
Jugador.prototype.completarInfoJugador = function() {
    this.nombre = 'Juan Carlos';
    this.apellido = 'Tauroni';
    this.edad = 19;
    this.idJugador = 1;
}

Jugador.prototype.actualizarPuntuacion = function() {


     return this.puntuacion(2,1)
}