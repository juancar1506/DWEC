let comprobarPos = new Set();
let tablero = [];

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    tablero.push(`id_${i}_${j}`);
  }
}
const delay = (n) => new Promise( r => setTimeout(r, n*1000));

function comprobar(posicion){
    if (comprobarPos.has(posicion)) {
      return false;
    }
  return true;
}

  async function pintar(pos) {
  let id = document.getElementById(pos);
  id.classList.add('barco');
  await delay(2);
}

function colocarPosicion(tipo){
    let ejeX = parseInt(Math.random() * 10);
    let ejeY = parseInt(Math.random() * 10);
    let eje = ['horizontal','vertical'];
    let pos = parseInt(Math.random() * (2 - 0) + 0);
    let barco;
   
        if(tipo=='lanchas'){
            barco = tamanoBarcos.get('lanchas');
        }
    
        if(tipo=='portaAviones'){
            barco = tamanoBarcos.get('portaAviones');
        }
    if (eje[pos]=='horizontal') {

         if(barco==2){   
          switch (ejeX) {
              case 9:
                if(comprobarPos.has((`id_${ejeY}_${ejeX}`)==false) || comprobarPos.size<=0){
                comprobarPos.add('id_'+ejeY.toString()+'_'+ejeX.toString());
                }else{
                  comprobarPos.add('id_'+ejeY.toString()+'_'+(ejeX-2).toString());
                }
                if(comprobarPos.has((`id_${ejeY}_${ejeX-1}`)==false) || comprobarPos.size<=0){
                comprobarPos.add('id_'+ejeY.toString()+'_'+(ejeX-1).toString());
                }else{
                  comprobarPos.add('id_'+ejeY.toString()+'_'+(ejeX-1).toString());
                }
                  break;
          
              default:
                if(comprobarPos.has((`id_${ejeY}_${ejeX}`)==false) || comprobarPos.size<=0){
                comprobarPos.add('id_'+ejeY.toString()+'_'+ejeX.toString());
                }else{
                  comprobarPos.add('id_'+ejeY.toString()+'_'+(ejeX-2).toString());
                }
                if(comprobarPos.has((`id_${ejeY}_${ejeX+1}`)==false) || comprobarPos.size<=0){
                comprobarPos.add('id_'+ejeY.toString()+'_'+(ejeX+1).toString());
                }else{
                  comprobarPos.add('id_'+ejeY.toString()+'_'+(ejeX-1).toString());
                }
                  break;
          }
        }
        if(barco==3){   
            switch (ejeX) {
                case 8:
                  if(comprobarPos.has((`id_${ejeY}_${ejeX}`)==false) || comprobarPos.size<=0){
                  comprobarPos.add('id_'+ejeY.toString()+'_'+ejeX.toString());
                  }else{
                    comprobarPos.add('id_'+ejeY.toString()+'_'+(ejeX-2).toString());
                  }
                  if(comprobarPos.has((`id_${ejeY}_${ejeX-1}`)==false) || comprobarPos.size<=0){
                  comprobarPos.add('id_'+ejeY.toString()+'_'+(ejeX-1).toString());
                  }else{
                    comprobarPos.add('id_'+ejeY.toString()+'_'+(ejeX-2).toString());
                  }
                  if(comprobarPos.has((`id_${ejeY}_${ejeX+1}`)==false) || comprobarPos.size<=0){
                  comprobarPos.add('id_'+ejeY.toString()+'_'+(ejeX+1).toString());
                  }else{
                    comprobarPos.add('id_'+ejeY.toString()+'_'+(ejeX-3).toString());
                  }
                    break;
                    case 9:
                      if(comprobarPos.has((`id_${ejeY}_${ejeX}`)==false)|| comprobarPos.size<=0){
                        comprobarPos.add('id_'+ejeY.toString()+'_'+ejeX.toString());
                      }else{
                        comprobarPos.add('id_'+ejeY.toString()+'_'+(ejeX-2).toString());
                      }
                      if(comprobarPos.has((`id_${ejeY}_${ejeX-1}`)==false) || comprobarPos.size<=0){
                        comprobarPos.add('id_'+ejeY.toString()+'_'+(ejeX-1).toString());
                      }else{
                        comprobarPos.add('id_'+ejeY.toString()+'_'+(ejeX-2).toString());
                      }
                      if(comprobarPos.has((`id_${ejeY}_${ejeX-2}`)==false) || comprobarPos.size<=0){
                        comprobarPos.add('id_'+ejeY.toString()+'_'+(ejeX-2).toString());
                      }else{
                        comprobarPos.add('id_'+ejeY.toString()+'_'+(ejeX-2).toString());
                      }
                          break;
                default:
                  if(comprobarPos.has((`id_${ejeY}_${ejeX}`)==false) || comprobarPos.size<=0){
                  comprobarPos.add('id_'+ejeY.toString()+'_'+ejeX.toString());
                  }else{
                    comprobarPos.add('id_'+ejeY.toString()+'_'+(ejeX-2).toString());
                  }
                  if(comprobarPos.has((`id_${ejeY}_${ejeX+1}`)==false) || comprobarPos.size<=0){
                  comprobarPos.add('id_'+ejeY.toString()+'_'+(ejeX+1).toString());
                  }else{
                    comprobarPos.add('id_'+ejeY.toString()+'_'+(ejeX-1).toString());
                  }
                  if(comprobarPos.has((`id_${ejeY}_${ejeX+2}`)==false) || comprobarPos.size<=0){
                  comprobarPos.add('id_'+ejeY.toString()+'_'+(ejeX+2).toString());
                  }else{
                    comprobarPos.add('id_'+ejeY.toString()+'_'+(ejeX-2).toString());
                  }
                    break;
            }
          }
    
    
    }
    if (eje[pos]=='vertical') {
         if(barco==2){   
          switch (ejeY) {
              case 9:
                if( comprobarPos.has((`id_${ejeY}_${ejeX}`)==false)  || comprobarPos.size<=0){
                comprobarPos.add('id_'+ejeY.toString()+'_'+ejeX.toString());
                }else{
                  comprobarPos.add('id_'+ejeY.toString()+'_'+(ejeX-2).toString());
                }
                if(comprobarPos.has((`id_${ejeY-1}_${ejeX}`)==false) || comprobarPos.size<=0){
                comprobarPos.add('id_'+(ejeY-1).toString()+'_'+ejeX.toString());
                }else{
                  comprobarPos.add('id_'+(ejeY-2).toString()+'_'+ejeX.toString());
                }
                  break;
          
              default:
                if( comprobarPos.has((`id_${ejeY}_${ejeX}`)==false)  || comprobarPos.size<=0){
                comprobarPos.add('id_'+ejeY.toString()+'_'+ejeX.toString());
                }else{
                  comprobarPos.add('id_'+ejeY.toString()+'_'+(ejeX-2).toString());
                }
                if(comprobarPos.has((`id_${ejeY+1}_${ejeX}`)==false) || comprobarPos.size<=0){
                comprobarPos.add('id_'+(ejeY+1).toString()+'_'+ejeX.toString());
                }else{
                  comprobarPos.add('id_'+(ejeY-1).toString()+'_'+ejeX.toString());
                }
                  break;
          }
        }
        if(barco==3){   
            switch (ejeY) {
                case 8:
                  if(comprobarPos.has((`id_${ejeY}_${ejeX}`)==false) && comprobarPos.has((`id_${ejeY}_${ejeX+1}`)==false)  || comprobarPos.size<=0){
                  comprobarPos.add('id_'+ejeY.toString()+'_'+ejeX.toString());
                  }else{
                    comprobarPos.add('id_'+ejeY.toString()+'_'+(ejeX-2).toString());
                  }
                  if(comprobarPos.has((`id_${ejeY+1}_${ejeX}`)==false) || comprobarPos.size<=0){
                  comprobarPos.add('id_'+(ejeY+1).toString()+'_'+ejeX.toString());
                  }else{
                  
                  }
                  if(comprobarPos.has((`id_${ejeY-1}_${ejeX}`)==false) || comprobarPos.size<=0){
                  comprobarPos.add('id_'+(ejeY-1).toString()+'_'+ejeX.toString());
                  }else{
               
                  }
                    break;
                    case 9:
                      if(comprobarPos.has((`id_${ejeY}_${ejeX}`)==false) || comprobarPos.size<=0){
                        comprobarPos.add('id_'+ejeY.toString()+'_'+ejeX.toString());
                      }else{
                        comprobarPos.add('id_'+ejeY.toString()+'_'+(ejeX-2).toString());
                      }
                      if(comprobarPos.has(`id_${ejeY-1}_${ejeX}`)==false){
                        comprobarPos.add('id_'+(ejeY-1).toString()+'_'+ejeX.toString());
                      }else{
                        comprobarPos.add('id_'+(ejeY-2).toString()+'_'+ejeX.toString());
                      }
                       if(comprobarPos.has(`id_${ejeY-2}_${ejeX}`)==false){
                        comprobarPos.add('id_'+(ejeY-2).toString()+'_'+ejeX.toString());
                       } else{
                        comprobarPos.add('id_'+(ejeY-3).toString()+'_'+ejeX.toString());
                       }
                          break;
                default:
                  if(comprobarPos.has((`id_${ejeY}_${ejeX}`)==false) || comprobarPos.size<=0){
                    comprobarPos.add('id_'+ejeY.toString()+'_'+ejeX.toString());
                  }else{
                    comprobarPos.add('id_'+ejeY.toString()+'_'+(ejeX-2).toString());
                  }
                  if(comprobarPos.has(`id_${ejeY+1}_${ejeX}`)==false){
                    comprobarPos.add('id_'+(ejeY+1).toString()+'_'+ejeX.toString());
                  }else{
                    comprobarPos.add('id_'+(ejeY-2).toString()+'_'+ejeX.toString());
                  }
                   if(comprobarPos.has(`id_${ejeY-2}_${ejeX}`)==false){
                    comprobarPos.add('id_'+(ejeY-2).toString()+'_'+ejeX.toString());
                   } else{
                    comprobarPos.add('id_'+(ejeY-3).toString()+'_'+ejeX.toString());
                   }
                
                  
                  break;
    
            }
          }
     
    }
}

 function ubicarBarcos(){
    let total = tamanoBarcos.get('lanchas')+tamanoBarcos.get('portaAviones');
    let i=0;

      let j=0;  
      while(tiposBarcos.has('lanchas')&& tamanoBarcos.get('lanchas')>j){
        colocarPosicion('lanchas');  
        j++;
        }
        j=0;
        while(tiposBarcos.has('portaAviones')&& tamanoBarcos.get('portaAviones')>j){
          colocarPosicion('portaAviones');  
          j++;
          }
        i++;
    
    comprobarPos.forEach(e => { 
      pintar(e);
    });   
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