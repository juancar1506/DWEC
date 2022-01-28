function allowDrop(ev) {
    ev.preventDefault()
}

function drag(ev) {
    ev.dataTransfer.setData("Informacion", ev.target.id)
}

function drop(ev) {
    ev.preventDefault()

    var data = ev.dataTransfer.getData("Informacion")
    if (data == 'bola') {
        document.getElementById("papelera").src = "images/papeleraLLena.jpg"
        document.getElementById("bola").setAttribute("hidden", "true")
    }
}

document.ondragstart = drag
document.ondragover = allowDrop
document.ondrop = drop