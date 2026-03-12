function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('img')
var data = new Date()
var hora = data.getHours()
var msghor = document.getElementById('msghor')

msg.innerHTML = `<p>Agora são ${hora} Horas.</p>`

if (hora >= 0 && hora < 12) {
    //bomdia
    img.src = 'Manhã.jpg'
    document.body.style.background = '#93ff93'
    msghor.innerHTML = `Bom dia!!!`

} else if (hora >= 12 && hora < 18) {
    //boatarde
    img.src = 'tarde.jpg'
    document.body.style.background = '#ffc862'
    msghor.innerHTML = `Boa Tarde!!!`

} else {
    //boanoite
    img.src = 'Noite.jpg'
    document.body.style.background = '#333333' 
    msghor.innerHTML = `Boa Noite!!!` 
}

}
