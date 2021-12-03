var tiposBarcos = new Set(["lanchas", "portaAviones","fragatas"]);

var tamanoBarcos = new Map([
    ["lanchas", 2],
    ["portaAviones", 3],
    ["fragatas",1]
]);

var numeroBarcos = new Map([
    ["lanchas", 2],
    ["portaAviones", 3],
    ["fragatas",1]
]);

function posicion() {
    return parseInt(Math.random() * 10);
}

function eje() {
    let eje = parseInt(Math.random() * 2);
    if (eje == 0) {
        return 'horizontal';
    } else {
        return 'vertical';
    }
}
function tipoBarco(){
    return parseInt(Math.random() * (4 - 1) + 1);
}

var barcos = null;

function generarBarco() {
    barcos = new Array(6);
    for (let i = 0; i < barcos.length; i++) {
        barcos[i] = new Array(4);
        barcos[i][0] = posicion();
        barcos[i][1] = posicion();
        barcos[i][2] = eje();
        barcos[i][3] = tipoBarco();
    
        if(barcos[i][3]==1){
            barcos[i][4]= 'fragatas';

        }
        if(barcos[i][3]==2){
            barcos[i][4]= 'lanchas';
            
        }
        if(barcos[i][3]==3){
            barcos[i][4]= 'portaAviones';
            
        }
    }
}

function comprobarBarco() {
    for (let i = 0; i < barcos.length; i++) {
        if (barcos[i][4]=='fragatas') {
            switch (barcos[i][0]) {
                case 0:
                    if (barcos[i][1]==0){
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]+1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                    }
                    if(barcos[0][1]==9){
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]-1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                    }
                    if (barcos[i][1]>0 && barcos[i][1]<9) {
                    if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                        barcos = null;
                        generarBarco();
                    }
                    if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]) == false) {
                        barcos = null;
                        generarBarco();
                    }
                    if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]) == false) {
                        barcos = null;
                        generarBarco();
                    }
                    if (comprobarPosicion(barcos[i][0], barcos[i][1]+1) == false) {
                        barcos = null;
                        generarBarco();
                    }
                }
                    colocar(barcos[i][0], barcos[i][1]);
                    break;
                case 9:
                    if(barcos[0][1]==9){
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]-1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                    }
                    if(barcos[0][1]==0){
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]+1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                    }
                    if (barcos[i][1]>0 && barcos[i][1]<9) {
                    if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                        barcos = null;
                        generarBarco();
                    }
                    if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]) == false) {
                        barcos = null;
                        generarBarco();
                    }
                    if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]) == false) {
                        barcos = null;
                        generarBarco();
                    }
                    if (comprobarPosicion(barcos[i][0], barcos[i][1]-1) == false) {
                        barcos = null;
                        generarBarco();
                    }
                }
                    colocar(barcos[i][0], barcos[i][1]);
                    break;
                    
                default:
                    if (barcos[i][1]==0){
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]+1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                    }
                    if(barcos[0][1]==9){
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]-1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                    }
                    if (barcos[i][1]>0 && barcos[i][1]<9) {
                    if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                        barcos = null;
                        generarBarco();
                    } 
                    if (comprobarPosicion(barcos[i][0], barcos[i][1]-1) == false) {
                        barcos = null;
                        generarBarco();
                    }
                    if (comprobarPosicion(barcos[i][0], barcos[i][1]+1) == false) {
                        barcos = null;
                        generarBarco();
                    }
                    if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]) == false) {
                        barcos = null;
                        generarBarco();
                    }   
                    if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]) == false) {
                        barcos = null;
                        generarBarco();
                    }
                }
                    colocar(barcos[i][0], barcos[i][1]);
                    break;
            }
               
        }
        if (barcos[i][4] == 'lanchas') {
            if (barcos[i][2] == 'vertical') {
                switch (barcos[i][1]) {
                    case 0: 
                    if(barcos[i][0]==0){
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]+1) == false) {
                            barcos = null;
                            generarBarco();
                        }

                        if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]+1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]+2) == false) {
                            barcos = null;
                            generarBarco();
                        }
                    }
                    if(barcos[i][0]==9){
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]-1) == false) {
                            barcos = null;
                            generarBarco();
                        }

                        if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]-1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]+2) == false) {
                            barcos = null;
                            generarBarco();
                        }
                    }
                    if (barcos[i][0]>0 && barcos[i][0]<9) {
                    if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                        barcos = null;
                        generarBarco();
                    }
                    if (comprobarPosicion(barcos[i][0], barcos[i][1] + 1) == false) {
                        barcos = null;
                        generarBarco();
                    }
                    if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]) == false) {
                        barcos = null;
                        generarBarco();
                    }
                    if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]) == false) {
                        barcos = null;
                        generarBarco();
                    }
                    if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]+1) == false) {
                        barcos = null;
                        generarBarco();
                    }
                    if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]+1) == false) {
                        barcos = null;
                        generarBarco();
                    }
                    if (comprobarPosicion(barcos[i][0], barcos[i][1]+2) == false) {
                        barcos = null;
                        generarBarco();
                    }
                }
                    colocar(barcos[i][0], barcos[i][1]);
                    colocar(barcos[i][0], barcos[i][1] + 1);
                    break;
                    case 9:
                        if(barcos[i][0]==0){
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]-1) == false) {
                                barcos = null;
                                generarBarco();
                            }

                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]-1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]-2) == false) {
                                barcos = null;
                                generarBarco();
                            }
                        }
                        if(barcos[i][0]==9){
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]-1) == false) {
                                barcos = null;
                                generarBarco();
                            }

                            if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]-1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]-2) == false) {
                                barcos = null;
                                generarBarco();
                            }
                        }
                        if (barcos[i][0]>0 && barcos[i][0]<9) {
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1] - 1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]-1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]-1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]-2) == false) {
                            barcos = null;
                            generarBarco();
                        }
                }
                        colocar(barcos[i][0], barcos[i][1]);
                        colocar(barcos[i][0], barcos[i][1] - 1);
                    
                        break;
                    default:
                        if(barcos[i][0]==0){
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]+1) == false) {
                                barcos = null;
                                generarBarco();
                            }
    
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]+1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]+2) == false) {
                                barcos = null;
                                generarBarco();
                            }
                        }
                        if(barcos[i][0]==9){
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]-1) == false) {
                                barcos = null;
                                generarBarco();
                            }
    
                            if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]-1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]+2) == false) {
                                barcos = null;
                                generarBarco();
                            }
                        }
                        if (barcos[i][0]>0 && barcos[i][0]<9) {
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], (barcos[i][1] + 1)) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]+1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]+1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]-1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]+2) == false) {
                            barcos = null;
                            generarBarco();
                        }
                    }
                        colocar(barcos[i][0], barcos[i][1]);
                        colocar(barcos[i][0], barcos[i][1] + 1);
                        break;
                }

            } 
            if(barcos[i][2]=='horizontal') {
                switch (barcos[i][0]) {
                    case 0:
                        if(barcos[i][1]==0){
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }

                            if (comprobarPosicion(barcos[i][0], barcos[i][1]+1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]+1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+2, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                        }
                        if(barcos[i][1]==9){
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }

                            if (comprobarPosicion(barcos[i][0], barcos[i][1]-1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]-1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+2, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                        }
                        if (barcos[i][1]>0 && barcos[i][1]<9) {
                            
                        
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0] + 1, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]-1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]+1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]+1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]-1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]+2, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                    }
                        colocar(barcos[i][0], barcos[i][1]);
                        colocar(barcos[i][0] + 1, barcos[i][1]);
                        break;
                    case 9:
                        if(barcos[i][1]==0){
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }

                            if (comprobarPosicion(barcos[i][0], barcos[i][1]+1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]+1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]-2, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                        }
                        if(barcos[i][1]==9){
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }

                            if (comprobarPosicion(barcos[i][0], barcos[i][1]+1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]+1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]-2, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                        }
                        if(barcos[i][1]>0 &&barcos[i][1]<9){
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0] - 1, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]-1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]+1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]+1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]-1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]-2, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                    }
                        colocar(barcos[i][0], barcos[i][1]);
                        colocar(barcos[i][0] - 1, barcos[i][1]);
                        break;

                    default:
                        if(barcos[i][1]==0){
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }

                            if (comprobarPosicion(barcos[i][0], barcos[i][1]+1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]+1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+2, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                        }
                        if(barcos[i][1]==9){
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }

                            if (comprobarPosicion(barcos[i][0], barcos[i][1]-1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]-1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+2, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                        }
                        if (barcos[i][1]>0 && barcos[i][1]<9) {
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0] + 1, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]+1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]-1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0] + 1, barcos[i][1]+1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0] + 1, barcos[i][1]-1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0] + 2, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0] - 1, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                    }
                        colocar(barcos[i][0], barcos[i][1]);
                        colocar(barcos[i][0] + 1, barcos[i][1]);
                        break;
                }

            }
        }
        if (barcos[i][4] == 'portaAviones') {
            if (barcos[i][2] == 'vertical') {
                switch (barcos[i][1]) {
                    case 0:
                        if(barcos[i][0]==0){
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]+1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]+2) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]+3) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]+1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]+2) == false) {
                                barcos = null;
                                generarBarco();
                            }
                        }
                        if(barcos[i][0]==9){
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]+1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]+2) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]+3) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]+1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]+2) == false) {
                                barcos = null;
                                generarBarco();
                            }
                        }
                        if(barcos[i][0]>0 && barcos[i][0]<9){
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1] + 1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1] + 2) == false) {
                            barcos = null;
                            generarBarco();
                        }

                        if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]+1) == false) {
                            barcos = null;
                            generarBarco();
                        }

                        if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]+2) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]-1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]+3) == false) {
                            barcos = null;
                            generarBarco();
                        }
                    }
                        colocar(barcos[i][0], barcos[i][1]);
                        colocar(barcos[i][0], barcos[i][1] + 1);
                        colocar(barcos[i][0], barcos[i][1] + 2);
                        break;
                    case 8:
                        if (barcos[i][0]==0) {
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1] - 1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1] + 1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]+1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]-1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]-2) == false) {
                                barcos = null;
                                generarBarco();
                            }
                        }
                        if (barcos[i][0]==9) {
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1] - 1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1] + 1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]+1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]-1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]-2) == false) {
                                barcos = null;
                                generarBarco();
                            }
                        }
                        if (barcos[i][0]>0 && barcos[i][0]<9){  
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1] - 1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1] + 1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]-1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]-1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]+1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]+1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]-2) == false) {
                            barcos = null;
                            generarBarco();
                        }
                    }
                        colocar(barcos[i][0], barcos[i][1]);
                        colocar(barcos[i][0], barcos[i][1] - 1);
                        colocar(barcos[i][0], barcos[i][1] + 1);
                        break;
                    case 9:
                        if(barcos[i][0]==0){
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]-1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]-2) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]-3) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]-1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]-2) == false) {
                                barcos = null;
                                generarBarco();
                            }
                        }
                        if(barcos[i][0]==9){
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]-1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]-2) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]-3) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]-1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]-2) == false) {
                                barcos = null;
                                generarBarco();
                            }
                        }
                       if(barcos[i][0]>0 && barcos[i][0]<9){ 
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1] - 1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1] - 2) == false) {
                            barcos = null;
                            generarBarco();
                        }

                        if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }

                        if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]-1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]-1) == false) {
                            barcos = null;
                            generarBarco();
                        }

                        if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]-2) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]-2) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]-3) == false) {
                            barcos = null;
                            generarBarco();
                        }
                    } 
                        colocar(barcos[i][0], barcos[i][1]);
                        colocar(barcos[i][0], barcos[i][1] - 1);
                        colocar(barcos[i][0], barcos[i][1] - 2);
                        break;
                    default:
                        if(barcos[i][0]==0){
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]+1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]+2) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]+3) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]+1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]+2) == false) {
                                barcos = null;
                                generarBarco();
                            }
                        }
                        if(barcos[i][0]==9){
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]+1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]+2) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]+3) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]+1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]+2) == false) {
                                barcos = null;
                                generarBarco();
                            }
                        }
                        if(barcos[i][0]>0 && barcos[i][0]<9){
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1] + 1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1] + 2) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]+1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]+1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]+2) == false) {
                            barcos = null;
                            generarBarco();
                        }

                        if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]+2) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]+3) == false) {
                            barcos = null;
                            generarBarco();
                        }
                    }
                        colocar(barcos[i][0], barcos[i][1]);
                        colocar(barcos[i][0], barcos[i][1] + 1);
                        colocar(barcos[i][0], barcos[i][1] + 2);
                        break;
                }
            } 
            if(barcos[i][2]=='horizontal')  {
                switch (barcos[i][0]) {
                    case 0:
                        if( barcos[i][1]==9){
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+2, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+3, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]-1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+2, barcos[i][1]-1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]-1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                        } 
                        if(barcos[i][1]==0){
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+2, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+3, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]+1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+2, barcos[i][1]+1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]+1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                        }
                        if(barcos[i][1]>0 && barcos[i][1]<9){
                    if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                        barcos = null;
                        generarBarco();
                    }
                    if (comprobarPosicion(barcos[i][0] + 1, barcos[i][1]) == false) {
                        barcos = null;
                        generarBarco();
                    }
                    if (comprobarPosicion(barcos[i][0] + 2, barcos[i][1]) == false) {
                        barcos = null;
                        generarBarco();
                    }
                    if (comprobarPosicion(barcos[i][0], barcos[i][1]-1) == false) {
                        barcos = null;
                        generarBarco();
                    }
                    if (comprobarPosicion(barcos[i][0], barcos[i][1]+1) == false) {
                        barcos = null;
                        generarBarco();
                    }
                    if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]+1) == false) {
                        barcos = null;
                        generarBarco();
                    }
                    if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]-1) == false) {
                        barcos = null;
                        generarBarco();
                    }
                    if (comprobarPosicion(barcos[i][0]+2, barcos[i][1]-1) == false) {
                        barcos = null;
                        generarBarco();
                    }
                    if (comprobarPosicion(barcos[i][0]+2, barcos[i][1]+1) == false) {
                        barcos = null;
                        generarBarco();
                    }
                    if (comprobarPosicion(barcos[i][0]+3, barcos[i][1]) == false) {
                        barcos = null;
                        generarBarco();
                    }
                        }
                    colocar(barcos[i][0], barcos[i][1]);
                    colocar(barcos[i][0] + 1, barcos[i][1]);
                    colocar(barcos[i][0] + 2, barcos[i][1]);
                        break;
                    case 8:
                        if( barcos[i][1]==9){
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]-1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]-1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]-1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]-2, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                        } 
                        if(barcos[i][1]==0){
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]-2, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]+1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]+1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]+1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                        }
                        if(barcos[i][1]>0 && barcos[i][1]<9){
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0] + 1, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0] - 1, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]-1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]+1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]-1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]+1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]+1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]+1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]-2, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                    }
                        colocar(barcos[i][0], barcos[i][1]);
                        colocar(barcos[i][0] + 1, barcos[i][1]);
                        colocar(barcos[i][0] - 1, barcos[i][1]);
                        break;
                    case 9:

                            if( barcos[i][1]==9){
                                if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                                    barcos = null;
                                    generarBarco();
                                }
                                if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]) == false) {
                                    barcos = null;
                                    generarBarco();
                                }
                                if (comprobarPosicion(barcos[i][0]-2, barcos[i][1]) == false) {
                                    barcos = null;
                                    generarBarco();
                                }
                                if (comprobarPosicion(barcos[i][0]-3, barcos[i][1]) == false) {
                                    barcos = null;
                                    generarBarco();
                                }
                                if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]-1) == false) {
                                    barcos = null;
                                    generarBarco();
                                }
                                if (comprobarPosicion(barcos[i][0]-2, barcos[i][1]-1) == false) {
                                    barcos = null;
                                    generarBarco();
                                }
                                if (comprobarPosicion(barcos[i][0], barcos[i][1]-1) == false) {
                                    barcos = null;
                                    generarBarco();
                                }
                            } 
                            if(barcos[i][1]==0){
                                if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                                    barcos = null;
                                    generarBarco();
                                }
                                if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]) == false) {
                                    barcos = null;
                                    generarBarco();
                                }
                                if (comprobarPosicion(barcos[i][0]-2, barcos[i][1]) == false) {
                                    barcos = null;
                                    generarBarco();
                                }
                                if (comprobarPosicion(barcos[i][0]-3, barcos[i][1]) == false) {
                                    barcos = null;
                                    generarBarco();
                                }
                                if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]+1) == false) {
                                    barcos = null;
                                    generarBarco();
                                }
                                if (comprobarPosicion(barcos[i][0]-2, barcos[i][1]+1) == false) {
                                    barcos = null;
                                    generarBarco();
                                }
                                if (comprobarPosicion(barcos[i][0], barcos[i][1]+1) == false) {
                                    barcos = null;
                                    generarBarco();
                                }
                            }
                            if(barcos[i][1]>0 && barcos[i][1]<9){
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0] - 1, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0] - 2, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]-1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]+1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]+1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]-1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]-2, barcos[i][1]-1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]-2, barcos[i][1]+1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]-3, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                            }
                        colocar(barcos[i][0], barcos[i][1]);
                        colocar(barcos[i][0] - 1, barcos[i][1]);
                        colocar(barcos[i][0] - 2, barcos[i][1]);
                        break;
                    default:
                        if( barcos[i][1]==9){
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+2, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+3, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]-1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+2, barcos[i][1]-1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]-1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                        } 
                        if(barcos[i][1]==0){
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+2, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+3, barcos[i][1]) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]+1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0]+2, barcos[i][1]+1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                            if (comprobarPosicion(barcos[i][0], barcos[i][1]+1) == false) {
                                barcos = null;
                                generarBarco();
                            }
                        }
                        if(barcos[i][1]>0 && barcos[i][1]<9){
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0] + 1, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0] + 2, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]+1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]-1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]+1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]+1, barcos[i][1]-1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]+2, barcos[i][1]+1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0], barcos[i][1]-1) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]+3, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                        if (comprobarPosicion(barcos[i][0]-1, barcos[i][1]) == false) {
                            barcos = null;
                            generarBarco();
                        }
                    }
                        colocar(barcos[i][0], barcos[i][1]);
                        colocar(barcos[i][0] + 1, barcos[i][1]);
                        colocar(barcos[i][0] + 2, barcos[i][1]);
                        break;
                }

            }
        }
      
        
    }
    console.log(barcos);
}
var tablero = new Array(10);

for (let i = 0; i < tablero.length; i++) {
    tablero[i] = new Array(10);
    for (let j = 0; j < tablero[i].length; j++) {
        tablero[i][j] = 0;
    }
}


function comprobarPosicion(X,Y) {
 if((X>=0 && X<=9 ) && (Y>=0 && Y<=9)){   
    if (tablero[Y][X] == 0) {
        return true;
    } else {
        return false;
    }
}else{
    return false;
}  
}
function colocar(X,Y){
    tablero[Y][X]=1;
}

function Demo() {
    vs = window.open('demo.html', 'width:150px', 'height:200px');

}

function verBarco() {
    vs = window.open('datos.html', 'width:150px', 'height:200px');
}

function verInfoA() {
    var v1 = window.open('infoA.html');
}

function verInfoJ() {
    var v1 = window.open('infoJ.html');

}
generarBarco();
comprobarBarco();
console.log(tablero);

