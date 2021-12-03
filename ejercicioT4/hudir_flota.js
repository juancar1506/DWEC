let tablero = [];
// Código js
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        tablero.push([i] + [j]);
    }

}
let comprobarPos = [];
const newLocal = 'barco';
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
    let po1='';
    let po2='';
    let po3='';

    if (c == 'lanchas') {
        if (posicion == 'vertical') {
            ejeX = parseInt(Math.random() * 10);
            ejeY = parseInt(Math.random() * 10);
                
                    switch (ejeY) {
                        case 9:
                            pos = `id_${ejeY}_${ejeX}`;
                            pos2 = `id_${(ejeY-1)}_${ejeX}`;
                            po1=ejeY.toString()+ejeX.toString();
                            po2=(ejeY-1).toString()+ejeX.toString();
                            break;
                        default:
                            pos = `id_${ejeY}_${ejeX}`;
                            pos2 = `id_${(ejeY+1)}_${ejeX}`;
                            po1=ejeY.toString()+ejeX.toString();
                            po2=(ejeY+1).toString()+ejeX.toString();
                            break;
                    }
                
            
            //posicion horizontal
        } else {
            ejeX = parseInt(Math.random() * 10);
            ejeY = parseInt(Math.random() * 10);
                
                    switch (ejeX) {
                        case 9:
                            pos = `id_${ejeY}_${ejeX}`;
                            pos2 = `id_${ejeY}_${(ejeX-1)}`;
                            po1=ejeY.toString()+ejeX.toString();
                            po2=ejeY.toString()+(ejeX-1).toString();
                            
                            break;
                        default:
                            pos = `id_${ejeY}_${ejeX}`;
                            pos2 = `id_${ejeY}_${(ejeX+1)}`;
                            po1=ejeY.toString()+ejeX.toString();
                            po2=ejeY.toString()+(ejeX+1).toString();
                            break;
                    }
                
            
        }

        comprobarPos.push(po1,po2);


        //portaAviones        
    } else {
        if (posicion == 'vertical') {
            ejeX = parseInt(Math.random() * 10);
            ejeY = parseInt(Math.random() * 10);
              
                    switch (ejeY) {
                        case 8:
                            pos = `id_${ejeY}_${ejeX}`;
                            pos2 = `id_${(ejeY+1)}_${ejeX}`;
                            pos3 = `id_${(ejeY-1)}_${ejeX}`;
                            po1=ejeY.toString()+ejeX.toString();
                            po2=(ejeY+1).toString()+ejeX.toString();
                            po3=(ejeY-1).toString()+ejeX.toString();
                            break;
                        case 9:
                            pos = `id_${ejeY}_${ejeX}`;
                            pos2 = `id_${(ejeY-1)}_${ejeX}`;
                            pos3 = `id_${(ejeY-2)}_${ejeX}`;
                            po1=ejeY.toString()+ejeX.toString();
                            po2=(ejeY-1).toString()+ejeX.toString();
                            po3=(ejeY-2).toString()+ejeX.toString();
                            break;
                        default:
                            pos = `id_${ejeY}_${ejeX}`;
                            pos2 = `id_${(ejeY+1)}_${ejeX}`;
                            pos3 = `id_${(ejeY+2)}_${ejeX}`;
                            po1=ejeY.toString()+ejeX.toString();
                            po2=(ejeY+1).toString()+ejeX.toString();
                            po3=(ejeY+2).toString()+ejeX.toString();
                            break;
                    }
                
            
            
        } else {
            ejeX = parseInt(Math.random() * 10);
            ejeY = parseInt(Math.random() * 10);

                    switch (ejeX) {

                        case 8:
                            pos = `id_${ejeY}_${ejeX}`;
                            pos2 = `id_${ejeY}_${(ejeX-1)}`;
                            pos3 = `id_${ejeY}_${(ejeX+1)}`;
                            po1=ejeY.toString()+ejeX.toString();
                            po2=ejeY.toString()+(ejeX-1).toString();
                            po3=ejeY.toString()+(ejeX+1).toString();
                            break;
                        case 9:
                            pos = `id_${ejeY}_${ejeX}`;
                            pos2 = `id_${ejeY}_${(ejeX-1)}`;
                            pos3 = `id_${ejeY}_${(ejeX-2)}`;
                            po1=ejeY.toString()+ejeX.toString();
                            po2=ejeY.toString()+(ejeX-1).toString();
                            po3=ejeY.toString()+(ejeX-2).toString();
                            break;
                        default:
                            pos = `id_${ejeY}_${ejeX}`;
                            pos2 = `id_${ejeY}_${(ejeX+1)}`;
                            pos3 = `id_${ejeY}_${(ejeX+2)}`;
                            po1=ejeY.toString()+ejeX.toString();
                            po2=ejeY.toString()+(ejeX+1).toString();
                            po3=ejeY.toString()+(ejeX+2).toString();
                            break;
                    }
                
           

        }
        comprobarPos.push(po1,po2,po3);

        document.getElementById(`${pos}`).setAttribute('class','barco');
        document.getElementById(`${pos2}`).setAttribute('class','barco');
        document.getElementById(`${pos3}`).setAttribute('class','barco');

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
let totBarcos = nB + nP;


    for (let clave of tiposBarcos) {
        if (tamanoBarcos.has(clave) && numeroBarcos.has(clave)) {
            while (clave == 'lanchas' && nB > 0) {
               for (let i = 0; i < tablero.length; i++) {
                    if(comprobarPos.includes(tablero[i])==false || comprobarPos.length==0){
                        ubicarBarco(clave);
                        break;
                    }
                   break;
               } 
                

                nB--;
        
            }
            while (clave == 'portaAviones' && nP > 0) {
                for (let i = 0; i < tablero.length; i++) {
                    if(comprobarPos.includes(tablero[i])==false || comprobarPos.length==0){
                        ubicarBarco(clave);
                        break;
                    }
                   break;
               } 
                
                nP--;
                
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