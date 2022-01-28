// Al hacer click en el botón de enviar tendrá que llamar a la la función validar 
// que se encargará de validar el formulario.
document.getElementById("idEnviar").addEventListener('click', validar, false);
let formulario = document.forms["idFormulario"]

/****************************************************************
 * FUNCIÓN GENERAL DE VALIDACIÓN
 * Unificar los dos tipos de validación
 *          - Mediante JS
 *          - Mediante Api de acceso a validación de html
 ****************************************************************/
function validar(e) {
    // IMPORTANTE!!! Realizar limpieza del formulario, a nivel de ClassName
    let errores = document.querySelectorAll('.error')
    errores.forEach(element => {
        element.classList.remove("error")
    });
    // IMPORTANTE!!! Realizar limpieza del formulario, a nivel de Spam de error
    let mensajeError = document.querySelectorAll('.errorSpam')
    mensajeError.forEach(element => {
        element.innerHTML = ""
    });
    // IMPORTANTE!!! Deshabilitamos el botón
    this.disabled = true

    if (validarAPIHTML(e) && validarJS(e) && confirm("¿Deseas enviar el formulario?")) {

        return true;

    } else {
        e.preventDefault();
        this.disabled = false;
        return false
    }
}


/********************************************************************************************
 *******************************************************************************************
 *************** FUNCIÓN PARA VALIDAR DE FORMA MANUAL MEDIANTE JAVASCRIPT
 *******************************************************************************************
 *******************************************************************************************/
function validarJS(eventopordefecto) {

    // Validamos cada uno de los apartados con llamadas a sus funciones correspondientes.
    return validarNombre() && validarEdad() && validarMatricula() && validarProvincia();
}
/****************************************************************************
 * FUNCIÓN INDIVIDUALES DE CADA CAMPO
 /***************************************************************************/

function validarNombre() {
    let inputNombre = formulario.elements["idNombre"]
    let inputApellidos = formulario.elements['idApellidos']
    if (inputNombre.value == "") {
        formulario.elements["idNombre"].className = "error";
        formulario.elements["idNombre"].focus();
        document.getElementById('idNombreError').innerHTML = "El campo: " + formulario.elements["idNombre"].name + " no puede estar en blanco"

        return false
    }

    if (inputApellidos.value == "") {
        formulario.elements["idApellidos"].className = "error";
        formulario.elements["idApellidos"].focus();
        document.getElementById('idApellidosError').innerHTML = "El campo: " + formulario.elements["idApellidos"].name + " no puede estar en blanco"

        return false
    }
    return true
}

/***************************************************************************/
/***************************************************************************/

function validarEdad() {

    let inputEdad = formulario.elements["idEdad"]

    // IMPORTANTE!! Realizar la validación de la edad mediante javascript.
    if (inputEdad == "") {
        formulario.elements["idEdad"].className = "error"
        formulario.elements["idEdad"].focus()
        document.getElementById('idEdadError').innerHTML = "El campo: " + formulario.elements["idEdad"].name + " no puede estar en blanco"
        return false
    } else if (inputEdad.value < 0 || inputEdad.value > 100) {
        formulario.elements["idEdad"].className = "error"
        formulario.elements["idEdad"].focus()
        document.getElementById('idEdadError').innerHTML = "El campo: " + formulario.elements["idEdad"].name + "no puede ser menor a 0 y mayor a 100"
        return false
    }
    return true;
}

/***************************************************************************/
/***************************************************************************/

function validarMatricula() {

    let inputMatricula = formulario.elements["idMatricula"]
    const regExp = /^\d{4}\s[A-Z{3}$]/

    // IMPORTANTE!! Realizar la validación de la matrícula mediante javascript y utilizando expresiones regulares
    if (inputMatricula == "") {
        formulario.elements["idMatricula"].className = "error"
        formulario.elements["idMatricula"].focus()
        document.getElementById('idMatriculaError').innerHTML = "El campo: " + formulario.elements["idMatricula"].name + " no puede estar en blanco"
        return false
    } else if (regExp.test(inputMatricula.value) == false) {
        formulario.elements["idMatricula"].className = "error"
        formulario.elements["idMatricula"].focus()
        document.getElementById('idMatriculaError').innerHTML = "El campo: " + formulario.elements["idMatricula"].name + " no puede estar en blanco"
        return false
    }
    return true;
}

/***************************************************************************/
/***************************************************************************/

function validarProvincia() {
    let selectProvincia = formulario.elements["idProvincia"]
    const valoresProvincia = new Set(["Gr", "Ma"]);

    // IMPORTANTE!! Realizar la validación de la provincia mediante javascript   
    if (selectProvincia == "") {
        formulario.elements["idProvincia"].className = "error"
        formulario.elements["idProvincia"].focus()
        document.getElementById('idProvinciaError').innerHTML = "El campo: " + formulario.elements["idProvincia"].name + " no puede estar en blanco"
        return false
    } else if (valoresProvincia.has(selectProvincia.value) == false) {
        formulario.elements["idProvincia"].className = "error"
        formulario.elements["idProvincia"].focus()
        document.getElementById('idProvinciaError').innerHTML = "El campo: " + formulario.elements["idProvincia"].name + " no puede estar en blanco"
        return false
    }
    return true;
}


/********************************************************************************************
 *********************************************************************************************
 ******** FUNCIÓN PARA VALIDAR, MEDIANTE EL USO DE LA API DE ACCESO A LA VALIDACIÓN DE HTML 
 *******************************************************************************************
 ********************************************************************************************/

function validarAPIHTML(eventopordefecto) {
    if (formulario.elements["nombre"].checkValidity()) {
        if (formulario.elements["nombre"].validity.valueMissing) {
            return false
        }

    } else if (formulario.elements["edad"].checkValidity()) {

        if (formulario.elements["edad"].validity.rangeUnderflow) {
            return false
        }
        if (formulario.elements["edad"].validity.rangeOverflow) {
            return false
        }
    } else if (formulario.elements["matricula"].checkValidity()) {

        formulario.elements["matricula"].setAttribute("pattern", "\d{4}\s[A-Z{3}$]")
        if (formulario.elements["matricula"].validity.patternMismatch) {
            return false
        }
    } else if (formulario.elements["provincia"].checkValidity()) {
        if (formulario.elements["provincia"].value == 0) {
            return false
        }
    }
    return true;
}