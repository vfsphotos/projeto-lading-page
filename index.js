var setaDireita = window.document.getElementById("setadireita")
var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("setaesquerda")

function RolarParaDireita(){
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    setaEsquerda.style = "display: flex; margin-top: 65px"
    setaDireita.style = "display: none"
}

function RolarParaEsquerda(){
    Leonardo.style = "display: flex"
    Bruna.style = "display: none"
    setaEsquerda.style = "display: margin-top: 65px"
    setaDireita.style = "display: flex"
}
