function crearDemo(){
    vs= window.open('demo.html','Demo'); 
      
}
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
     
        document.getElementById(`${pos}`).setAttribute('class', 'barco');
        document.getElementById(`${pos2}`).setAttribute('class', 'barco');
    
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

        document.getElementById(`${pos}`).setAttribute('class', 'barco');
        document.getElementById(`${pos2}`).setAttribute('class', 'barco');
        document.getElementById(`${pos3}`).setAttribute('class', 'barco');

    }
}

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}
