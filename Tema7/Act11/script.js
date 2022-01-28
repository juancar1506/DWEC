let provincia = new Set (["Andalucia", "Madrid","Galicia"])

let idProvincia = document.getElementById("idProvincia")

let idComunidad = document.getElementById("idComunidad")

let valorPorDefecto = document.createTextNode("Ninguno Seleccionado")
let porDefecto = document.createElement("option")
porDefecto.appendChild(valorPorDefecto)
idProvincia.appendChild(porDefecto)

provincia.forEach(element => {
    let opcion = document.createElement("option")
    let txtOpcion = document.createTextNode(element)
    opcion.appendChild(txtOpcion)
    opcion.setAttribute("value",element)
    idProvincia.appendChild(opcion)
});

let valorPorDefecto2 = document.createTextNode("Ninguno Seleccionado")
let porDefecto2 = document.createElement("option")
porDefecto2.appendChild(valorPorDefecto2)
idComunidad.appendChild(porDefecto2)

let comunidad = new Map()

idProvincia.addEventListener("change",function(ev){
    switch (idProvincia.value) {
        case "Andalucia":
            comunidad.clear()
            limpiar(idComunidad)
                let And = ["Almeria","Cádiz","Córdoba","Granada","Huelva","Jaén","Málaga","Sevilla"]
                    let i=0;
                    while (And.length>i) {
                    comunidad.set(i,And[i])
                    i++;
                    }
                    comunidad.forEach(element => {
                        
                        let opcion = document.createElement("option")
                        let txtopt = document.createTextNode(element)
                        opcion.appendChild(txtopt)
                        idComunidad.appendChild(opcion)
                        if (element=="Granada") {
                            opcion.setAttribute("selected","true")   
                        }
                    });
                break;
        case "Madrid":
            comunidad.clear()
            limpiar(idComunidad)
            let Mad = ["Madrid Capital"]
             let k=0;
            while (Mad.length>k) {
            comunidad.set(k,Mad[k])
            k++;
            comunidad.forEach(element => {
                let opcion = document.createElement("option")
                let txtopt = document.createTextNode(element)
                opcion.appendChild(txtopt)
                idComunidad.appendChild(opcion)
            });
            }
            break;
        case "Galicia":
            limpiar(idComunidad)
            comunidad.clear()
            let Gal = ["La Coruña","Lugo","Orense","Pontevedra"]
                let j=0;
            while (Gal.length>j) {
            comunidad.set(j,Gal[j])
            j++;
            }

            comunidad.forEach(element => {
                let opcion = document.createElement("option")
                let txtopt = document.createTextNode(element)
                opcion.appendChild(txtopt)
                idComunidad.appendChild(opcion)
            });
            break;
        default:
            comunidad.clear()
            limpiar(idComunidad)
            let valorPorDefecto2 = document.createTextNode("Ninguno Seleccionado")
            let porDefecto2 = document.createElement("option")
            porDefecto2.appendChild(valorPorDefecto2)
            idComunidad.appendChild(porDefecto2)
            break;
    }
        console.log(comunidad)
        
})

function limpiar(){
    let datos = document.querySelectorAll("#idComunidad option")
    datos.forEach(element => {
        element.remove()
    });
}