const alumnos =  new Map([ ["a",4],["b",6],["c",38] ]);
const TAM = alumnos.size;

/*
let alumnos = new Map();
let TAM = 0;
window.onload=insertarAlumnos;
*/
/*
** Descripción: Insertar los alumnos en el Map
*/
function insertarAlumnos(){   

    TAM = prompt("Especifica el numero de alumnos") 
   
    for (let i = 0; i < TAM; i++) {
  
        let nombre = String(prompt("Especifica el nombre : "));
        let edad =  parseInt(prompt("Especifica la edad  : "));
 
        if (alumnos.has(nombre))
        {
           alert("Error, el alumno ya existe")        
        }else{
           alumnos.set(nombre,edad)
        }
    }
}


/*
** Descripción: Mostrar información de los alumnos existentes en el Map
*/
function mostrarAlumnos(){    
   
    for (const [n, e] of alumnos) {
          console.log(`el alumno : ${n} tiene : ${e} anios`)
    }
}

/*
** Descripción: Mostrar la edad media de los alumnos existentes en el Map
*/
function mostrarMediaEdad(){
    
    let edadMedia=0;
    
    alumnos.forEach(  function(e,n) {
        edadMedia+=e;              
    });

    //Calcular el valor medio
    edadMedia /= TAM

    console.log(`La edad media es : ${edadMedia}`)
    
}

/*
** Descripción: Comprobar si existe un alumno a partir de su nombre
*/
function comprobarAlumno(){

    console.log("Pendiende de desarrollo........");
}


/*
** Descripción: Borrar del Map, el alumno indicado por su nombre
*/
function borrarPorNombre(){

    console.log("Pendiende de desarrollo........");
}

/*
** Descripción: Borrar del Map, todos los alumnos con la edad indicada
*/
function borrarPorEdad(){

    console.log("Pendiende de desarrollo........");
}