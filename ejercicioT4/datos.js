let b1 = document.querySelectorAll('body');
let h1 = document.createElement('h1');
let txth1 = document.createTextNode('Datos Barcos:');
h1.appendChild(txth1);
b1[0].appendChild(h1);

let barcos = window.opener.barcos;
let tiposBarcos = window.opener.tiposBarcos;

for (let i = 0; i < barcos.length; i++) {
    let h2 = document.createElement('h2');
    if (tiposBarcos.has(barcos[i][4])) {
        let txtH2 = document.createTextNode('Barco: ' + (i + 1) + ' ' + barcos[i][4] + ' tamaño: ' + barcos[i][3]);
        h2.appendChild(txtH2);
        b1[0].appendChild(h2);
    }

}