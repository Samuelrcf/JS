function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formano = document.getElementById('ano')
    var res = document.getElementById('res')
    if(formano.value.length == 0 || formano.value > ano) {
        window.alert('Data inválida')
    } else{
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(formano.value)
        res.innerHTML = `Idade: ${idade}`
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(sexo[0].checked){
            genero = 'Homem'
        if(idade >= 0 && idade<10){
            img.setAttribute('src', 'foto-bebe-m.png')
        } else if(idade < 21){
            img.setAttribute('src', 'foto-jovem-m.png')
        } else if (idade<50){
            img.setAttribute('src', 'foto-adulto-m.png')
        } else{
            img.setAttribute('src', 'foto-idoso-m.png')
        }
        } else if (sexo[1].checked){
            genero = 'Mulher'
        if(idade >= 0 && idade<10){
            img.setAttribute('src', 'foto-bebe-f.png')
        } else if(idade < 21){
            img.setAttribute('src', 'foto-jovem-f.png')
        } else if (idade<50){
            img.setAttribute('src', 'foto-adulto-f.png')
        }else{
            img.setAttribute('src', 'foto-idoso-f.png')
        }
        }
        res.innerHTML = `Você é <strong>${genero}</strong> com <strong>${idade}</strong> anos de idade!`
        res.appendChild(img)
    }
}