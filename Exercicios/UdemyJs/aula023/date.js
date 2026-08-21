const data = new Date()
console.log(data.toString())

console.log('Dia', data.getDate())
console.log('Mês', data.getMonth() + 1)// 0 == janeiro, 1 == fevereiro
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Minuto', data.getMinutes())
console.log('Dia semana', data.getDay())// 0 - Domingo, 6 - Sábado