var jugador

let formulario = document.forms["formulario"]

let inputs = document.getElementsByTagName('input')

formulario.elements["enviar"].addEventListener("click", function(ev) {

    let errores = document.querySelectorAll(".error")
    errores.forEach(element => {

        element.innerHTML = ""
    });

    this.disabled = true
    if (validar() && validarHTML()) {
        alert("Datos Correctos")
        jugador = new Jugador();
        jugador.nombre = nombre.value
        jugador.apellido = apellidos.value
        jugador.edad = edad.value
        window.open("tablero_iniciales_alumnos.html")
        return true
    } else {
        ev.preventDefault();
        this.disabled = false
        return false
    }
}, false)

let nombre = formulario.elements["nombre"]
let apellidos = formulario.elements["apellidos"]
let edad = formulario.elements["edad"]

function validar() {
    //Validamos el nombre, el apellido y la edad con JS


    if (nombre.value == "") {
        document.getElementById("idNombreError").innerHTML = "Este campo no puede estar vacio"
        return false
    }
    if (apellidos.value == "") {
        document.getElementById("idApellidosError").innerHTML = "Este campo no puede estar vacio"
        return false
    }
    if (edad.value < 0 || edad.value > 120) {
        document.getElementById("idEdadError").innerHTML = "La edad no puede ser menor a 0 o myor a 120"
        return false
    }
    if (edad.value < 18) {
        document.getElementById("idEdadError").innerHTML = "La edad debe ser mayor a 18"
        return false
    }
    return true
}

function validarHTML() {

    //Validamos el nombre, el apellido y la edad del HTML
    if (nombre.checkValidity()) {
        nombre.setCustomValidity("")
        if (nombre.validity.valid) {
            nombre.setCustomValidity("Este campo es requerido")
            return false
        }
        if (nombre.validity.valueMissing) {
            return false
        }
        if (nombre.validity.patternMismatch) {
            nombre.setCustomValidity("En este campo no se admiten numeros")
            return false
        }
    }
    if (apellidos.checkValidity()) {
        apellidos.setCustomValidity("")
        if (apellidos.validity.valid) {
            apellidos.setCustomValidity("Este campo es requerido")
            return false
        }
        if (apellidos.validity.valueMissing) {
            return false
        }
        if (apellidos.validity.patternMismatch) {
            apellidos.setCustomValidity("En este campo no se admiten numeros")
            return false
        }
    }
    if (edad.checkValidity()) {
        edad.setCustomValidity("")
        if (edad.validity.valid) {
            edad.setCustomValidity("Este campo es requerido")
            return false
        }
        if (edad.validity.rangeOverflow) {
            return false
        }
        if (edad.validity.rangeOUnderflow) {
            return false
        }
    }
    return true
}