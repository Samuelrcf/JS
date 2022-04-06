var idade = 64
if (idade<16) {
    console.log('Não pode votar')
} else { 
    if (16<=idade && idade<18){
        console.log('Voto opcional')
    } else if (idade>64){
        console.log('Voto opcional')
    } else{
        console.log('Voto obrigatório')
    }
}