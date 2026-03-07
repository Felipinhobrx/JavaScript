let num = [5, 9, 3, 7, 1]
num.sort()

/*
for (pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for (pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}