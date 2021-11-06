let vs = null;
let contador =0;
function abrirVentana(){
    vs= window.open('','Pagina en blanco','width=200,height=200');
    vs.document.write(`
        <div>Nombre:</div>
        <div id="valorNombre"></div>
        <div>Apellido:</div>
    <div id="valorApellido"></div>
    <div>Edad:</div>
    <div id="valorEdad"></div>
    
    <div id="idcontador"></div>
    <script>
    let nomb= window.opener.document.getElementById('idNomb').value;
    let ape = window.opener.document.getElementById('idApe').value;
    let edad = window.opener.document.getElementById('idEdad').value;

    let contador = window.opener.document.getElemetById('idcontador') +=1;

    document.getElementById("valorNombre").innerHTML=nomb;
    document.getElementById("valorApellido").innerHTML=ape;
    document.getElementById("valorEdad").innerHTML=edad;
    document.getElementById("idcontador").innerHTML=contador;  

    </script>
`);
} 


