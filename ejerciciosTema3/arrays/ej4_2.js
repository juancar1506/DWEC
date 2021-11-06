/* Por array
let cant =0;
let numAlu = prompt('Numero de alumnos');
let alumnos = [];
let nota =  [];
let nombre =  [];
while (cant<numAlu){
     nombre[cant]= prompt("Escribe el nombre ");
     nota[cant] = parseInt(prompt("Escribe la nota"));
    alumnos[cant]='Alumno: '+nombre[cant]+' Nota: '+nota[cant]+'<br/>'; 
    cant++;
}

let suma = 0;
nota.forEach((e,i)=>{
    suma += e;
});

document.write(`${alumnos.join('')}<br/>La nota media del curso es: ${Math.round(suma/alumnos.length)}`);
*/

//Por Map

let alumnos = new Map();
let tamno = 0;

function insertAlumnos(){
    tamno = parseInt(prompt('Numero de alumnos:'));
    for(let i=0;i<tamno;i++){
            let nomb= String(prompt('Intorduce el nombre del alumno:'));
            let nota = parseInt(prompt('Introduce la nota del alumno:'));

        if(alumnos.has(nomb)){
            console.log('El nombre no existe');
            return  false;
        }else{
            alumnos.set(nomb,nota);
        }
    }    
}

function mediaNotas(){
    let suma = 0;
    alumnos.forEach((e,i)=>{
    suma += e;
    });
    document.getElementById('Operacion').innerHTML=`La media de todas las notas es ${parseFloat(suma/tamno)}`; 
    console.log('Media realizada');
}


function mostrarAlumnos(){
    for (const [a,n] of alumnos) {
       document.getElementById('Operacion').innerHTML+=`<p>El alumno ${a} tiene una nota de ${n}</p>`;
    }
    console.log('Operacion realizada');
}

function comprobarAlumno(){
    let dato = String(prompt('Que nombre quiere comprobar:'));
    
    if(alumnos.get(dato)==undefined){
        console.log('Este nombre no pertenece a un alumno');
        document.getElementById('Operacion').innerHTML=`<p>El alumno ${dato} no pertenece a esta clase</p>`;
        return false;
    }else{
        document.getElementById('Operacion').innerHTML=`<p>El alumno ${dato} pertenece a esta clase</p>`;
        return true;
    }
}

function borrarPorNombre(){
    const nombre = prompt('Introduzca el nombre que quiere borrar:');
    
        if (alumnos.has(nombre)){ 
            alumnos.delete(nombre);
            documnet.getElementById('Operacion').innerHTML=`<p>El alumno ${nombre} ha sido eliminado de la lista de alumnos</p>`;
            console.log('Operacion realizada');
            return true;
        }else{
            console.log('Este nombre no existe en el map');
            document.getElementById('Operacion').innerHTML='<p>Este alumno no existe en la lista</p>';
            return false;
        }
    
}

function borrarPorNota(){

    const nota = parseInt(prompt('Introduzca la nota que quiere borrar:'));
    for ( const[c,v] of alumnos) {
        if(nota==v){
            alumnos.delete(c);
            document.getElementById('Operacion').innerHTML=`Se han borrado los alumnos que han sacado una nota de ${nota}`;
            console.log('Operacion realizada');
            return true;
        }else{
            document.getElementById('Operacion').innerHTML=`Ningun alumno ha sacado una nota de ${nota}`;
        }
    }
}