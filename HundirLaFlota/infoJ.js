let body = document.body
let jugador = window.opener.opener.jugador

console.log(body.children)
if (body.children.length == 0) {

    if (jugador == undefined || jugador.nombre == null) {
        jugador = new Jugador()
        jugador.completarInfoJugador()
    }

    console.log(jugador.nombre + ' ' + jugador.apellido)

    let contenido = document.createElement('div')

    contenido.classList.add('contenido')

    body.appendChild(contenido)

    crearDatos(body, contenido)

}

function crearDatos(cuerpo, objeto) {
    let datos = document.createElement('ul')
    let Lnombre = document.createElement('li')
    let txtLnombre = document.createTextNode('Nombre :' + jugador.nombre + ' ' + jugador.apellido)

    Lnombre.appendChild(txtLnombre)

    let Ledad = document.createElement('li')
    txtLedad = document.createTextNode('Edad: ' + jugador.edad)

    Ledad.appendChild(txtLedad)

    let puntuacion = document.createElement('li')

    puntuacion.setAttribute('id', 'idPuntuacion')

    datos.appendChild(Lnombre)
    datos.appendChild(Ledad)
    datos.appendChild(puntuacion)



    datos.classList.add('inform')

    objeto.appendChild(datos)
    cuerpo.appendChild(objeto)

    let txt = document.getElementById('idPuntuacion')
    txt.innerHTML = jugador.actualizarPuntuacion()
}