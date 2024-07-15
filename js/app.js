let listaDeIngressosSelecionados = []
let maxSuperior = 200
let maxInferior = 400
let totalPista = 100

function comprar() {
    let selecionaIngressos = document.getElementById("tipo-ingresso")
    let tipoIngresso = selecionaIngressos.value
    let quantidade = parseInt(document.getElementById("qtd").value)

    if ((isNaN(quantidade) || quantidade <= 0)) {
        alert("Por favor, insira uma quantidade válida.");
        document.getElementById('qtd').value = ''
        return false
    }

    if (quantidade = '') {
        document.getElementById('qtd').value = ''
        return false
    }
    
    if (tipoIngresso == "pista") {
        totalPista = numeroMaximoPermitido(quantidade, totalPista);
        alterarTextoQuantidade('qtd-pista', totalPista)
    } else if (tipoIngresso == "inferior"){
        maxInferior = numeroMaximoPermitido(quantidade, maxInferior);
        alterarTextoQuantidade('qtd-inferior', maxInferior)
    } else {
        maxSuperior = numeroMaximoPermitido(quantidade, maxSuperior);
        alterarTextoQuantidade('qtd-superior', maxSuperior)
    }
    
    document.getElementById('qtd').value = ''
    console.log(totalPista)
    console.log(maxInferior)
    console.log(maxSuperior)

}

function alterarTextoQuantidade (id, tipo){
    textoIngresso = document.getElementById(id)
    textoIngresso.textContent = tipo
}

function numeroMaximoPermitido(quantidade, total) {

    if (quantidade > total) {
        alert("Ingressos esgotados")
        return total
    } else {
        alert("Compra realizada")
        return total -= quantidade
    }

}  

