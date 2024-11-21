var barcos = [
    'img/Ship-1.png',
    'img/Ship-1.png',
    'img/Ship-1.png',
    'img/Ship-2.png',
    'img/Ship-2.png',
    'img/Ship-2.png',
    'img/Ship-3.png',
    'img/Ship-3.png',
    'img/Ship-3.png'
];

posicoesBarcos = [];

pos = 0;

var barcosExistentes = 0, tirosDisparados = 0, barcosAtingidos = 0, barcosRestantes = 0;

var divBarcosExistentes = document.getElementById('barcosExistentes');
var divTirosDisparados = document.getElementById('tirosDisparados');
var divBarcosAtingidos = document.getElementById('barcosAtingidos');
var divBarcosRestantes = document.getElementById('barcosRestantes');

function montarTabuleiro() {
    var linhas = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    var tabela = document.getElementById('tabuleiro');
    var c = 0;

    var elemento = "";

    linhas.forEach((letra, i) => {
        // console.log(letra)
        elemento = "<tr>";
        if (i == 0) {
            for (c = 0; c < 12; c++) {
                if (c == 0) {
                    elemento += `<th class='header'>${letra}</th>`;
                } else {
                    elemento += `<th class='header'>${c}</th>`
                }
            }
        } else {
            for (c = 0; c < 12; c++) {
                if (c == 0) {
                    elemento += `<th class='header'>${letra.toUpperCase()}</th>`;
                } else {
                    elemento += `<td><img onclick='atirar(this)' name='${pos}' src='img/Fire-icon.png'></td>`;
                    pos++;
                }
            }
        }
        elemento += "</tr>";
        tabela.innerHTML += elemento;
    });

    sortearBarcos();
}

function sortearBarcos() {
    for (let i = 0; i < 9; i++) {
        let sorteio = Math.floor(Math.random() * pos);
        posicoesBarcos[sorteio] = barcos[i];
    }
    console.log(posicoesBarcos);
    atualizaResultados();
}

function atirar(img) {
    tirosDisparados++;

    if (posicoesBarcos[img.name]) {
        img.src = posicoesBarcos[img.name];
        img.className = "acertou";
        barcosAtingidos++;
    } else {
        img.src = 'img/Wave.png'
        img.className = "errou";
    }
    atualizaResultados();
}

function atualizaResultados() {

    barcosExistentes = barcos.length;
    divBarcosExistentes.textContent = barcosExistentes;

    divTirosDisparados.textContent = tirosDisparados;
    divBarcosAtingidos.textContent = barcosAtingidos;

    divBarcosRestantes.textContent = (barcosExistentes - barcosAtingidos);

    if (barcosExistentes == barcosAtingidos) {
        var resultadoFinal = document.getElementById('resultadoFinal');

        var texto = "";

        texto += "<h3>Parabéns!!! Você acertou todos os barcos.</h3>";
        texto += `<hr><p>Você precisou de ${tirosDisparados} para acertar todos os ${barcosExistentes} existentes</p>`;

        resultadoFinal.innerHTML = texto;
        resultadoFinal.className = "finalizou";
    }

}


montarTabuleiro();

