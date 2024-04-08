let listaDeNumerosSorteados = [];

function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    if(de>ate){
        alert("O valor inserido no campo 'Do número' não pode ser maior que o valor 'até o número");
        return;
    }

    if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
    }    

    for (let i = 0; i < quantidade; i++) {
        let numeroSorteado = obterNumeroAleatorio(de, ate);
        listaDeNumerosSorteados.push(numeroSorteado);
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${listaDeNumerosSorteados}</label>`;

    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max, ){
    let numero = Math.floor(Math.random() * (max - min + 1)) + min;
    if(listaDeNumerosSorteados.includes(numero)) {
        return obterNumeroAleatorio(min, max);
    }else{
        return numero;
    }
}

function alterarStatusBotao() {
    let botao = document.getElementById("btn-reiniciar");
    if(botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById("quantidade").value = "";
    document.getElementById('de').value = "";
    document.getElementById('ate').value = "";
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
    listaDeNumerosSorteados = [];
}