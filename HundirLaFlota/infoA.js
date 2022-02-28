let body = document.body
let autor = new Autor();

autor.completarInfoAutor()

console.log(body.children)
if (body.children.length == 0) {

    console.log(autor.nombre + ' ' + autor.apellido)

    let contenido = document.createElement('div')

    contenido.classList.add('contenido')

    body.appendChild(contenido)

    crearDatos(body, contenido)

}

function crearDatos(cuerpo, objeto) {
    let datos = document.createElement('ul')
    let Lnombre = document.createElement('li')
    let txtLnombre = document.createTextNode('Nombre :' + autor.nombre + ' ' + autor.apellido)

    Lnombre.appendChild(txtLnombre)

    let Ledad = document.createElement('li')
    txtLedad = document.createTextNode('Edad: ' + autor.edad)

    Ledad.appendChild(txtLedad)

    let redes = document.createElement('li')
    let txtredes = document.createTextNode(autor.redes)

    redes.appendChild(txtredes)

    datos.appendChild(Lnombre)
    datos.appendChild(Ledad)
    datos.appendChild(redes)

    datos.classList.add('inform')

    objeto.appendChild(datos)
    cuerpo.appendChild(objeto)
}