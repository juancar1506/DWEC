const reg_exp = /^\d{8}[a-zA-Z]$/;

let formulario = document.forms['formulario']

let dni  = formulario.elements["dni"]

let error = document.getElementById("idDNIError")

let correcto = document.getElementById("idDNICorrecto")

dni.addEventListener('blur', function(ev) {
    error.innerHTML=""
    correcto.innerHTML=""
    if (this.value == "" && reg_exp.test(this.value)==false) {
        error.innerHTML="No ha escrito el DNI correctamente"
    }
    else{
        formulario.submit()
        correcto.innerHTML="El DNI es valido"
    }
})

dni.addEventListener('click',function(ev){
    error.innerHTML=""
    this.value=""
    correcto.innerHTML=""
    this.setCustomValidity("")
})