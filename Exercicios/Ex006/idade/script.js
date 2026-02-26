function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('idade')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bb H.jpg')

            } else if (idade >= 10 && idade < 21){
                //Jovem
                img.setAttribute('src', 'adolescente H.jpg')

            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto H.jpg')

            } else {
                //Idoso
                img.setAttribute('src', 'idoso H.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bb M.jpg')

            } else if (idade >= 10 && idade < 21){
                //Jovem
                img.setAttribute('src', 'adolescente M.jpg')

            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto M.jpg')

            } else {
                //Idoso
                img.setAttribute('src', 'idosa M.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerText = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}