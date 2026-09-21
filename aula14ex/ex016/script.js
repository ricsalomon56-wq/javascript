function contar() {
var inicio = Number(document.getElementById('inicio').value)
var fim = Number(document.getElementById('fim').value)
var passo = Number(document.getElementById('passo').value)
var contagem = document.querySelector('div#contagem')
contagem.innerHTML = '';
for (let num=inicio; num <= fim; num += passo) {
    contagem.innerHTML += `${num} \u{1F449}` 

    }
contagem.innerHTML += '\u{1F1E7} \u{1F1F7}'
}