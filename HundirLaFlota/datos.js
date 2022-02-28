
let body = document.body
let barcos = window.opener.barcos;
let tiposBarcos = window.opener.tiposBarcos;
console.log(barcos)

tiposBarcos.forEach(tbarco => {
    let div = document.createElement('div')
    let titulo = document.createElement('h2')
    let txtTitulo = document.createTextNode(tbarco)
    titulo.appendChild(txtTitulo)
    titulo.classList.add('titulo')
    div.setAttribute('id',tbarco)
    div.appendChild(titulo)
    body.appendChild(div)
})


barcos.forEach(barco => {
    let  posicion = document.createElement('p')
    txtPosicion = document.createTextNode(barco[0]+'. '+'eje: '+ barco[barco.length-1])
    posicion.appendChild(txtPosicion)
    posicion.classList.add('posicion')
    
    let eje;
    let txtEje;
    
    
    
    let divs = document.getElementsByTagName('div')
    for (let i = 0; i < divs.length; i++) {

        if(divs[i].id == barco[1]){
            divs[i].appendChild(posicion)
            for (let j = 3; j < barco.length-1; j++) {
                eje = document.createElement('p')
                eje.classList.add('eje')
                txtEje = document.createTextNode('posicion: '+ barco[j][0]+','+barco[j][1])
                eje.appendChild(txtEje)
                console.log(eje)
                divs[i].appendChild(eje)
            }   
        }
    }


})