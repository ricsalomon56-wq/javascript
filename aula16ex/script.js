const numbers = []
const tab = document.getElementById('sel')

function adicionar() {
    const input = Number(document.getElementById('num').value)

    if (input === '' || Number.isNaN(num) || input < 1 || input > 100) {
        windows.alert('Digite um numero valido!')
        return
    }
    
    numbers.push(num)
    
    tab.innerHTML = ''

    numbers.forEach((numero, indice) => {
        const item = document.createElement('option')

        item.textContent = numero
        item.value = `tab${indice}`

        tab.appendChild(item)

    })
    
   input.valueOf = ''
}
