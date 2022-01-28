/*
var zFondos150 = ["url('./img/150x150/coche-1.jpg')","url('./img/150x150/coche-2.jpg')","url('./img/150x150/coche-3.jpg')","url('./img/150x150/coche-4.jpg')"];
var zFondos600 = ["url('./img/600x400/coche-1.jpg')","url('./img/600x400/coche-2.jpg')","url('./img/600x400/coche-3.jpg')","url('./img/600x400/coche-4.jpg')"];
*/
var zFondos150 = ['img/150x150/coche-1.jpg','img/150x150/coche-2.jpg','img/150x150/coche-3.jpg','img/150x150/coche-4.jpg']
var zFondos600 = ['img/600x400/coche-1.jpg','./img/600x400/coche-2.jpg','img/600x400/coche-3.jpg','img/600x400/coche-4.jpg']

var imagenPrincipal = document.querySelector(".imagen-principal")

var subImagenes = document.querySelectorAll('[class *= "subImagen-"]')


imagenPrincipal.style.backgroundImage=`url(./${zFondos600[0]})`;
/*
for (let i = 0; i < zFondos150.length; i++) {
  subImagenes[i].style.backgroundImage=`url(./${zFondos150[i]})`;
}
*/
/*
subImagenes[0].style.backgroundImage=`url(./${zFondos150[0]})`;
subImagenes[1].style.backgroundImage=`url(./${zFondos150[1]})`;
subImagenes[2].style.backgroundImage=`url(./${zFondos150[2]})`;
subImagenes[3].style.backgroundImage=`url(./${zFondos150[3]})`;
*/


subImagenes.forEach(imagen => {
  imagen.style.backgroundImage = `url(./${zFondos150[imagen.id]})`
  imagen.addEventListener("mouseover",accion)
});


/*
subImagenes[0].addEventListener("mouseover",accion0);
subImagenes[1].addEventListener("mouseover",accion1);
subImagenes[2].addEventListener("mouseover",accion2);
subImagenes[3].addEventListener("mouseover",accion3);
*/

function accion() {
  
  imagenPrincipal.style.backgroundImage = `url(./${zFondos600[event.target.id]})`
  
}

/*
function accion0(){imagenPrincipal.style.backgroundImage =zFondos600[0];}
function accion1(){imagenPrincipal.style.backgroundImage =zFondos600[1];}
function accion2(){imagenPrincipal.style.backgroundImage =zFondos600[2];}
function accion3(){imagenPrincipal.style.backgroundImage =zFondos600[3];}
*/


/**
  URL CÓDIGO FUENTE: https://francescricart.com/como-generar-una-galeria-de-imagenes-de-producto-con-javascript/
*/