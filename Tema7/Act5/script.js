
let form = document.forms['idForm']
let elementos = form.elements

form.addEventListener('submit',function(evento){
    
    let div = document.getElementById('idMostrar')
    
    div.classList.remove('oculto')
    let span = document.getElementsByTagName('span')
    for (let i = 0; i < span.length; i++) {
        span[i].innerHTML=elementos[i].value;
    }
    evento.preventDefault();
})

form.addEventListener('reset',function (evento){
    let div =document.getElementById('idMostrar')
    div.classList.add('oculto')
}) 
    