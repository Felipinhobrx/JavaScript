function FizzBuzz(x) {
    if (x % 3 === 0 && x % 5 === 0) return 'FizzBuzz' 
    if (x % 3 === 0) return 'Fizz'
    if (x % 5 === 0) return 'Buzz'
    if (x > 100 || x < 0) return 'Maior/Menor'
    else {return 'Não é divisivel'}
}

console.log(FizzBuzz(15))