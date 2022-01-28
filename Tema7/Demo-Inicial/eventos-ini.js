var color_css = 'background: #222; color: #bada55'
/**
* Uso de addEventListener this y Event
**/

 document.getElementById("idEnviar").addEventListener ("click", mostrarInformacion);


function mostrarInformacion(e){

    console.clear()
    console.log(`Usando this : %c${this.value}`,color_css);
    console.log(`Usando Event : %c${e.target.value}`,color_css);
    
    let formulario = document.forms['idFormulario']

    console.log('El valor del texto es: %c'+ formulario.elements['idNombre'].value,color_css)
    
    let OpcionesRadio = document.getElementsByName('opciones')
    
   OpcionesRadio.forEach(elemento => {
       if(elemento.checked){
           console.log('El valor del radio es: %c'+ elemento.value,color_css)

       }
   });
    if(formulario.elements['idCondiciones'].checked){
   console.log('Ha sido seleccionado elemento de condiciones: %c'+ formulario.elements['idCondiciones'].value,color_css)
    }
    if(formulario.elements['idPrivacidad'].checked){
   console.log('Ha sido seleccionado el elemento de privacidad: %c'+ formulario.elements['idPrivacidad'].value,color_css) 
    } 
    //let lista = formulario.elements['idSelect']
    //let idxSeleccionado = lista.selectedIndex
    //opcionSeleccionada = lista.options[idxSeleccionado]
    //console.log('El elemento de la lista select seleccionado es: %c'+ opcionSeleccionada.text+'/'+formulario.elements['idSelect'].value+,color_css) 

    switch (formulario.elements['idSelect'].selectedIndex) {
        case 0:
            console.log('El elemento de la lista select seleccionado es: %c Primer valor/'+formulario.elements['idSelect'].value,color_css)
            break;
        case 1:
            console.log('El elemento de la lista select seleccionado es: %c Segundo valor/'+formulario.elements['idSelect'].value,color_css)
            break;
        case 2:
            console.log('El elemento de la lista select seleccionado es: %c Tercer valor/'+formulario.elements['idSelect'].value,color_css)
            break;
        case 3:
            console.log('El elemento de la lista select seleccionado es: %c Cuarto valor/'+formulario.elements['idSelect'].value,color_css)
            break;        
    }
    
    console.log('El elemento de la lista de tipo datalist seleccionado es: %c'+formulario.elements['idInputDataList'].value,color_css)

   e.preventDefault();
}


