let cant =0;
let array = [];
while (cant<10){
    array[cant] = prompt("Escribe");
    cant++;
}

function mostrarArray(){
   let vs1 = window.open('','mostrar elementos','width=500,height=500');
    vs1.document.write('Los usuariios son: '+ array.join());
}

function mostrarArrayLength(){
    let vs2 = window.open('','mostrar elementos','width=500,height=500');
     vs2.document.write('El numero de usuarios son: '+ array.length);
 }
 function mostrarArrayOrden(){
    let vs3 = window.open('','mostrar elementos','width=500,height=500');
     vs3.document.write('Los usuariios son: '+ array.sort().join());
 }

 function mostrarArrayI(){
    let vs4 = window.open('','mostrar elementos','width=500,height=500');
     vs4.document.write('Los usuariios son: '+ array.reverse().join());
 }

