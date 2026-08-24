let h1 = document.getElementById('texto')

const data = new Date()

// Mês, Ano
let mes = data.getMonth() + 1
let ano = data.getFullYear()
// Hora, Minuto, Segundo
let hora = data.getHours()
let min = data.getMinutes()
let sec = data.getSeconds()

// Calculando dia da semana
let diasemana = data.getDay()
let diasemanatexto;

switch (diasemana) {
    case 0:
        diasemanatexto = 'Domingo'
        break;
    case 1:
        diasemanatexto = 'Segunda'
        break;
    case 2:
        diasemanatexto = 'Terça'
        break;
    case 3:
        diasemanatexto = 'Quarta'
        break;
    case 4:
        diasemanatexto = 'Quinta'
        break;
    case 5:
        diasemanatexto = 'Sexta'
        break;
    case 6:
        diasemanatexto = 'Sabado'
}

diasemana = data.getDate()

switch (mes) {
    case 1:
        mes = "Janeiro"
        break;
    case 2:
        mes = 'Fevereiro'
        break;
    case 3:
        mes = 'Março'
        break;
    case 4:
        mes = 'Abril'
        break;
    case 5:
        mes = 'Maio'
        break;
    case 6:
        mes = 'Junho'
        break;
    case 7:
        mes = "Julho"
        break;
    case 8:
        mes = 'Agosto'
        break;
    case 9:
        mes = 'Setembro'
        break;
    case 10:
        mes = 'Outubro'
        break;
    case 11:
        mes = 'Novembro'
        break;
    case 12:
        mes = 'Dezembro'
        break;
}

h1.innerText = diasemanatexto + ' Feira, ' + diasemana + ' de ' + mes + ', ' + hora + ' horas, ' + min + ' minutos, ' + sec + ' segundos'

//alert(diasemana + ' ' + hora + ' horas ' + min + ' minutos ' + sec + ' segundos')