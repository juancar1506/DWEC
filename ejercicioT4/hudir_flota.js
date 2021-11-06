let tablero = [];
// Código js
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        tablero.push('id_' + [i] + '_' + [j]);
    }

}
let comprobarPos = [];

function ubicarBarco(c) {
    let ejes = ['vertical', 'horizontal'];
    let eje = parseInt(Math.random() * (2 - 0) + 0);
    let posicion = ejes[eje];
    let ejeX;
    let ejeY;
    let pos = '';
    let pos2 = '';
    let pos3 = '';
    let contador = 0;
    let colocar = true;

    if (c == 'lanchas') {
        if (posicion == 'vertical') {
            ejeX = parseInt(Math.random() * 10);
            ejeY = parseInt(Math.random() * 10);
            while (contador != tablero.length) {
                if (comprobarPos.length == 0 || comprobarPos.includes(tablero[contador]) == false) {
                    switch (ejeY) {
                        case 9:
                            pos = `id_${ejeY}_${ejeX}`;
                            pos2 = `id_${(ejeY-1)}_${ejeX}`;
                            break;
                        default:
                            pos = `id_${ejeY}_${ejeX}`;
                            pos2 = `id_${(ejeY+1)}_${ejeX}`;
                            break;
                    }
                }
                contador++;
            }
            //posicion horizontal
        } else {
            ejeX = parseInt(Math.random() * 10);
            ejeY = parseInt(Math.random() * 10);
            while (contador != tablero.length) {
                if (comprobarPos.length == 0 || comprobarPos.includes(tablero[contador]) == false) {
                    switch (ejeX) {
                        case 9:
                            pos = `id_${ejeY}_${ejeX}`;
                            pos2 = `id_${ejeY}_${(ejeX-1)}`;
                            break;
                        default:
                            pos = `id_${ejeY}_${ejeX}`;
                            pos2 = `id_${ejeY}_${(ejeX+1)}`;
                            break;
                    }
                }
                contador++;
            }
        }
        comprobarPos.push(pos, pos2);
        document.getElementById(`${pos}`).setAttribute('class', 'barco');
        document.getElementById(`${pos2}`).setAttribute('class', 'barco');
        //portaAviones        
    } else {
        if (posicion == 'vertical') {
            ejeX = parseInt(Math.random() * 10);
            ejeY = parseInt(Math.random() * 10);
            while (contador != tablero.length) {
                if (comprobarPos.length == 0 || comprobarPos.includes(tablero[contador]) == false) {
                    switch (ejeY) {
                        case 8:
                            pos = `id_${ejeY}_${ejeX}`;
                            pos2 = `id_${(ejeY+1)}_${ejeX}`;
                            pos3 = `id_${(ejeY-1)}_${ejeX}`;
                            break;
                        case 9:
                            pos = `id_${ejeY}_${ejeX}`;
                            pos2 = `id_${(ejeY-1)}_${ejeX}`;
                            pos3 = `id_${(ejeY-2)}_${ejeX}`;
                            break;
                        default:
                            pos = `id_${ejeY}_${ejeX}`;
                            pos2 = `id_${(ejeY+1)}_${ejeX}`;
                            pos3 = `id_${(ejeY+2)}_${ejeX}`;
                            break;
                    }
                }
                contador++;
            }
        } else {
            ejeX = parseInt(Math.random() * 10);
            ejeY = parseInt(Math.random() * 10);
            while (contador != tablero.length) {
                if (comprobarPos.length == 0 || comprobarPos.includes(tablero[contador]) == false) {
                    switch (ejeX) {

                        case 8:
                            pos = `id_${ejeY}_${ejeX}`;
                            pos2 = `id_${ejeY}_${(ejeX-1)}`;
                            pos3 = `id_${ejeY}_${(ejeX+1)}`;
                            break;
                        case 9:
                            pos = `id_${ejeY}_${ejeX}`;
                            pos2 = `id_${ejeY}_${(ejeX-1)}`;
                            pos3 = `id_${ejeY}_${(ejeX-2)}`;
                            break;
                        default:
                            pos = `id_${ejeY}_${ejeX}`;
                            pos2 = `id_${ejeY}_${(ejeX+1)}`;
                            pos3 = `id_${ejeY}_${(ejeX+2)}`;
                            break;
                    }
                }
                contador++;
            }

        }
        comprobarPos.push(pos, pos2, pos3);
        document.getElementById(`${pos}`).setAttribute('class', 'barco');
        document.getElementById(`${pos2}`).setAttribute('class', 'barco');
        document.getElementById(`${pos3}`).setAttribute('class', 'barco');

    }
}
let tiposBarcos = new Set(["lanchas", "portaAviones"]);

const tamanoBarcos = new Map([
    ["lanchas", 2],
    ["portaAviones", 3]
]);

const numeroBarcos = new Map([
    ["lanchas", 2],
    ["portaAviones", 3]
]);
let nB = numeroBarcos.get('lanchas');
let nP = numeroBarcos.get('portaAviones');
let totBarcos = nP + nP;

function ubicarBarcos() {
    for (let clave of tiposBarcos) {
        if (tamanoBarcos.has(clave) && numeroBarcos.has(clave)) {
            while (clave == 'lanchas' && nB > 0) {
                ubicarBarco(clave);

                nB--;
            }
            while (clave == 'portaAviones' && nP > 0) {
                ubicarBarco(clave);
                nP--;
            }
        }
    }

}




/* tamanoBarcos.forEach(function(c,v)){
    for (let i = 0; i < numeroBarcos; i++) {
          tamanoBarcos.forEach(function (c1,v1) ){
           if(c==c1){

           }
        }
    }
    }
      if(tamanoBarcos.has('portaAviones')==numeroBarcos.has('portaAviones')){
        miBarco == 'portaAviones';
    }else{
        miBarco = 'lanchas';
    }
    */