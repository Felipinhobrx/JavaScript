var amigo = {nome: 'Felipe',
    idade: 15,
    sexo: 'M',
    peso: 50,
    engordar(p=0){
        console.log('Engordou!!!')
        this.peso += p
    }
}

engordar(2)

/*
console.log(amigo)
console.log(amigo.nome)
*/