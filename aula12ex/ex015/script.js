function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert ('[ERRO!] Verifique os dados e tente novamente!')

    } 
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade <= 4) {
            img.setAttribute('src', 'homembebe.png')
            }
            else if (idade >4 && idade <=12) {
                img.setAttribute('src', 'homemcrianca.png')
            }
            else if (idade >12 && idade <=18) {
                img.setAttribute('src', 'homemteen.png')
            }
            else if (idade >18 && idade <=60) {
                img.setAttribute('src', 'homemadulto.png')
            }
            else if (idade >60) {
                img.setAttribute('src', 'homemmaduro.png')
            }

        }
        else {
            genero = 'Mulher'
            if (idade <= 4) {
            img.setAttribute('src', 'mulherbebe.png')
            }
            else if (idade >4 && idade <=12) {
                img.setAttribute('src', 'mulhercrianca.png')
            }
            else if (idade >12 && idade <=18) {
                img.setAttribute('src', 'mulherteen.png')
            }
            else if (idade >18 && idade <=60) {
                img.setAttribute('src', 'mulheradulto.png')
            }
            else if (idade >60) {
                img.setAttribute('src', 'mulhermaduro.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }    

}