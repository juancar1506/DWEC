class persona {

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

    get genero() {
        return this._genero;
    }

    set genero(valor) {
        this._genero = valor;
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
class autor extends persona {
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

class jugador extends persona {
    constructor(nombre, apellido, edad, genero, idJugador) {
        super(nombre, apellido, edad, genero);
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
autor.prototype.completarInfoAutor = function() {
    this.nombre = 'Juan Carlos';
    this.apellido = 'Tauroni Roldan';
    this.edad = 19;
    this.genero = 'M';
    this.redes = 'Github juancar1506';
}
jugador.prototype.completarInfoJugador = function() {
    this.nombre = 'Juan Carlos';
    this.apellido = 'Tauroni';
    this.edad = 19;
    this.genero = 'M'
    this.idJugador = 1;
}

var autor1 = new autor();
autor1.completarInfoAutor();
var jugador1 = new jugador();
jugador1.completarInfoJugador();