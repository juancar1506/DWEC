var dato = parseInt(prompt("Introduce un numero positivo:"));
 var guardarnum = `Numeros pares hasta ${dato} son: `;
    for (let i = 1; i <= dato; i+=2) {
          guardarnum += `${i},`
    } 
    window.onload = function(){
        document.getElementById("valor_entrada").innerHTML = dato;
        document.getElementById("valor_salida").innerHTML = guardarnum;
    }