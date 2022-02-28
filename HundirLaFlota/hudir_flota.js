// Código js
let jugador = window.opener.jugador
var barcos = new Array();
var demo = document.getElementById('idDemo')
var idBarcos = document.getElementById('idBarcos')
var juagador = document.getElementById('idJugador')
var autor = document.getElementById('idAutor')
var tablero = new Array(10);

var posicionesAComprobar = new Array()

function generarTablero() {
    for (let i = 0; i < tablero.length; i++) {

        tablero[i] = new Array(10);
        for (let j = 0; j < tablero[i].length; j++) {
            tablero[i][j] = 0;
        }
    }
}



var tiposBarcos = new Set(['fragatas', 'lanchas', 'portaAviones']);

const tamanoBarcos = new Map([
    ['fragatas', 1],
    ['lanchas', 2],
    ['portaAviones', 3]
]);
const numeroBarcos = new Map([
    ['fragatas', 2],
    ['lanchas', 2],
    ['portaAviones', 3]
]);

function posicionAleatoria(tamanio) {
    let aleatorio
    aleatorio = Math.floor(Math.random() * (tamanio))
    return aleatorio
}

function eje() {
    let e = parseInt(Math.random() * 2)
    if (e == 0) {
        return 'horizontal'
    }
    return 'vertical'
}



function crearBarcos() {
    barcos.length = 0
    generarTablero()
    tiposBarcos.forEach(e => {

        if (numeroBarcos.has(e)) {
            let cont = numeroBarcos.get(e)
            let tamano = tamanoBarcos.get(e)
            let contar = 0
            while (contar < cont) {
                let datos = new Array();
                datos.push(barcos.length + 1, e, tamano)
                barcos.push(datos)
                contar++
            }
        }
    });
    barcos.forEach(barco => {
        let libre
        do {
             libre = false
             direccion = eje()
            if (direccion == 'horizontal') {
                let fila = posicionAleatoria(tablero.length)
                let col = posicionAleatoria(tablero[fila].length - barco[2])
             
                for (let i = 0; i < barco[2]; i++) {
                    if (tablero[fila][i + col] != 0) {
                        libre = true
                    }   

                    if (!libre) {
                        tablero[fila][i + col] = 1
                        barco.push([fila,i + col])
                        posicionesAComprobar.push('id_'+fila+'_'+(i + col))
                    }
                        
                }


            } else {
                let fila = posicionAleatoria(tablero.length - barco[2])
                let col = posicionAleatoria(tablero[fila].length)
               
                for (let i = 0; i < barco[2]; i++) {
                    if (tablero[i + fila][col] != 0) {
                        libre = true
                    } 

                    if(!libre){
                        tablero[i + fila][col] = 1
                        
                        barco.push([i + fila,col])
                        posicionesAComprobar.push('id_'+(i +fila)+'_'+col)
                    }
                }

            }
            console.log(barco)
        } while (libre && posicionesAComprobar.length!= 15 && barco.length> barco[2]+3);
        barco.push(direccion)
    });
}

idBarcos.addEventListener('click',()=>{
    const vs = window.open('datos.html')
})

juagador.addEventListener('click',() => {
    const vs = window.open('infoJ.html')
    
})

autor.addEventListener('click',() => {
    const vs = window.open('infoA.html')

    
})

demo.addEventListener('click', () => {
    const vs = window.open('tablero.html')
})

crearBarcos()

let jugar = document.getElementById('idJugar')

let parar = document.getElementById('idParar')

jugar.addEventListener('click',play)

parar.addEventListener('click',reanudar)

function reanudar() {
    let botones = document.getElementsByTagName('button')
    for (let i = 0; i < botones.length - 2; i++) {
        console.log(botones[i])
        botones[i].removeAttribute('disabled')
        jugar.style.display = 'inline'
        parar.style.display = 'none'
    }

    for (let i = 0; i < casillas.length; i++) {
        casillas[i].removeEventListener('click',disparar,true)
        
    }

}

function play() {
    let botones = document.getElementsByTagName('button')
    for (let i = 0; i < botones.length - 2; i++) {
        console.log(botones[i])
        botones[i].setAttribute('disabled','')
        jugar.style.display = 'none'
        parar.style.display = 'inline'
    }

    for (let i = 0; i < casillas.length; i++) {
        casillas[i].addEventListener('click',disparar,true)
        
    }
}   

function disparar(e) {
    console.log(e.target.id)
    for (let i = 0; i < posicionesAComprobar.length; i++) {
        if(posicionesAComprobar[i] == e.target.id) {
            e.target.classList.add('barco')
        } else {
            e.target.classList.add('agua')
        }    
    }
    
    

}

let casillas = document.getElementsByTagName('td')


