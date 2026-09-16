function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   



    msg.innerHTML = `Agora sao ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#5295b4'
    }
    else if (hora >= 12 && hora <=18) {
        img.src = 'tarde.png'
        document.body.style.background = 'rgb(192, 165, 76)'
    }
    else {
        img.src = 'noite.png'
        document.body.style.background = 'rgb(13, 16, 63)'
    }
}