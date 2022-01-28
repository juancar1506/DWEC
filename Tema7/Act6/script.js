let formulario = document.forms['formulario']

formulario.email.addEventListener('blur', function(ev) {
    if (this.validity.valueMissing) {
        document.getElementById('idEmailError').innerHTML = "Rellene este campo"
            //this.setCustomValidity("No ha escito nada en este campo")
        ev.preventDefault()

    } else if (this.validity.typeMismatch) {
        //this.setCustomValidity("Lo que ha introducido no es un email")
        document.getElementById('idEmailError').innerHTML = "Lo que ha introducido no es un email"
        ev.preventDefault()
    } else if (this.validity.valid) {
        formulario.submit();
    }

})

formulario.email.addEventListener("click", function() {
        document.getElementById('idEmailError').innerHTML = ""
        this.value = ""

    })
    /*
    formulario.email.addEventListener('input', () => {
        this.setCustomValidity("")
        this.checkValidity()
    })

    formulario.email.addEventListener('invalid', () => {
        if (this.value == "") {
            this.setCustomValidity("Esciba su correo")
        } else {
            this.setCustomValidity("Solo se puede introducir letras mayusculas o minusculas")
        }
    })

    */