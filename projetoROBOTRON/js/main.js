let corzador = 0
const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const cor = document.getElementById("corzinha")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatistica(evento.target.dataset.peca)
    });
});

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatistica(peca){
    estatisticas.forEach( (elemento)=>{
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
} 


function mudarCor(){
    if (corzador==0){
    cor.src="img/Robotron 2000 - Vermelho.png"
    corzador += 1
    }
    else if (corzador==1){
        cor.src="img/Robotron 2000 - Amarelo.png"
        corzador += 1
        }
    else if (corzador==2){
    cor.src="img/Robotron 2000 - Branco.png"
    corzador += 1
    }
    else if (corzador==3){
        cor.src="img/Robotron 2000 - Preto.png"
        corzador += 1
        }
    else if (corzador==4){
    cor.src="img/Robotron 2000 - rosa.png"
    corzador += 1
    }
    else{
        cor.src="img/robotron.png"
        corzador == 0
        }
}

