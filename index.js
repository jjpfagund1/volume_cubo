let resposta = document.getElementById("resposta")
function calcular(){
    let lado = Number(document.getElementById("lado").value)
    let volume = lado * lado * lado
    
    resposta.innerHTML = "O Volume do cubo é igual a: "+ volume +" m3"
    resposta.style.fontWeight = "bold"
}