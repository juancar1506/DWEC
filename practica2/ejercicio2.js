let colorR = parseInt(Math.random()*255);
let colorV = parseInt(Math.random()*255);
let colorA = parseInt(Math.random()*255);
let color = `${colorR},${colorV},${colorA}`;

document.write(`<div id="fondo" style="background-color:rgb(${color})"></div>`);