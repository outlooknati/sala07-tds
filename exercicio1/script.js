function soma(){
    var numero1 = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber
    var resposta = document.getElementById("respsoma")
    //console.log(numero1, numero2)
    resposta.textContent = numero1 + numero2
    //resposta.innerHTML = numero1 + numero2
    //resposta.innerText = numero1 + numero2
}

function sub(){
    var numero3 = parseFloat(document.getElementById("n3").value)
    var numero4 = parseFloat(document.getElementById("n4").value)
    var resposta = document.getElementById("respsub")
    
    resposta.textContent = numero3 - numero4
}

function multi(){
    var numero5 = document.getElementById("n5").valueAsNumber
    var numero6 = document.getElementById("n6").valueAsNumber
    var resposta = document.getElementById("respmulti")
    
    resposta.textContent = numero5 * numero6
}

function div(){
    var numero7 = document.getElementById("n7").valueAsNumber
    var numero8 = document.getElementById("n8").valueAsNumber
    var resposta = document.getElementById("respdiv")
    
    if(numero8 !== 0){
        resposta.textContent = numero7 / numero8
    }else{
        resposta.textContent = "não se divide por 0"
    }
}

function media(){
    var n1 = document.getElementById("n1").valueAsNumber
    var n2= document.getElementById("n2").valueAsNumber
    var n3 = document.getElementById("n3").valueAsNumber
    var n4 = document.getElementById("n4").valueAsNumber
    var n5 = document.getElementById("n5").valueAsNumber
    var resposta = document.getElementById("respmedia")
    resposta.textContent = (n1 + n2 + n3 + n4 + n5)/5
}