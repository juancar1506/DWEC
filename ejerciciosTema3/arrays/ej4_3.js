let cant =0;
let numPers = prompt('Numero de personas');
let Persona;
let edad =  [];
let nombre =  [];
while (cant<numPers){
     nombre[cant]= prompt("Escribe el nombre ");
     edad[cant] = parseInt(prompt("Escribe la edad"));
    Persona ='Nombre: '+nombre[cant].+' edad: '+edad[cant]+'<br/>'; 
    cant++;
}

function suma(array){
    let suma = 0;
    array.forEach((e,i)=>{
    suma += e;
    }
}



