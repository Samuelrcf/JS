function carry(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 9
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora<12){
        img.src = 'fotomanha.png'
        document.body.style.background = 'e2cd9f'
    } else{
        img.src = '#'
        document.body.style.background = '#b9846f'
    }
}