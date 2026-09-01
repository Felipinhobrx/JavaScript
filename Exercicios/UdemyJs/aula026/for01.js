// 1-Criar uma variavel 2-Condição 3-Incremento
/*
for (let i = 1; i <= 5; i++) {
    console.log(`Linha ${i}`)
}
*/
for (c = 0; c <= 10; c++) {
    const par = c % 2 === 0 ? 'Par' : 'Impár'
    console.log(c, par)
}