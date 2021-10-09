
for (let i = 0; i < 2000; i++) {
    let colorR = parseInt(Math.random()*255);
    let colorV = parseInt(Math.random()*255);
    let colorA = parseInt(Math.random()*255);
    let left = parseInt(Math.random()*1000);
    let top = parseInt(Math.random()*1000);

    document.write(`<div style="background-color:rgb(${colorR},${colorV},${colorA});left:${left}px;top:${top}px;position:fixed;
    width:50px;
    height:50px;
    "></div>`);
}