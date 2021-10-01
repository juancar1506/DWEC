let dato = parseInt(prompt("Introduce un numero positivo:"));
let guardarnum = `Numeros pares hasta ${dato} son: `;
    for (let i = 2; i <= dato; i+=2) {
          guardarnum += `${i},`
    } 
    window.onload = function(){
        document.getElementById("valor_entrada").innerHTML = dato;
        document.getElementById("valor_salida").innerHTML = guardarnum;
    }






