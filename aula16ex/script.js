const numbers = []
const tab = document.getElementById('sel')

function adicionar() {
    const input = document.getElementById('num')
    const num = Number(input.value)
    
    if (input.value === '' || Number.isNaN(num) || input < 1 || input > 100) {
        windows.alert('Digite um numero valido!')
        return
    }
    
    numbers.push(num)
    
    tab.innerHTML = ''

    numbers.forEach((numero, indice) => {
        
        const item = document.createElement('option')

        item.textContent = `O valor adicionado foi ${numero}`
        item.value = `tab${indice}`

        tab.appendChild(item)

    })
    
    input.value = ''
}


function finalizar() {

    const crescente = [...numbers].sort((a,b) => a-b)
    const tam = numbers.length
    const maior = crescente[tam - 1]
    const menor = crescente[0]
    
    let soma = 0
    for (let c = 0; c < tam; c++) {
        soma += numbers[c]
    }

    const media = soma/tam
    
    const res = document.getElementById('finalizar')
    
    res.innerHTML = `
        <p> Ao todo temos ${tam} números cadastrados. </p>
        <p> O maior valor informado foi ${maior}. </p>
        <p> O menor valor informado foi ${menor}. </p>
        <p> Somando todos os valores, temos ${soma}. </p>
        <p> A media dos valores ${media}. </p>
    `
}
