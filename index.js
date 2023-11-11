var leonardo = window.document.getElementById("depoimentoleo")
var samanta = window.document.getElementById("depoimentosa")
var bruna = window.document.getElementById("depoimentobru")
var setadireita = window.document.getElementById("setadireita")
var setaesquerda = window.document.getElementById("setaesquerda")



function rolarparadireita() {
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setaesquerda.style = "display:flex; margin-top:165px"
    setadireita.style = "display:none"
    


}

function rolarparaesquerda() {
 bruna.style = "display:none"
 leonardo.style = "display:flex"
 setaesquerda.style = "display:none"
 setadireita.style = "display:flex"
}