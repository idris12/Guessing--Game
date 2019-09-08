let makeGuess = function(num) {
    let min = 50
    let max = 100
    // This is the formula to set the range from 50 - 100 
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
   
    // This returns the random number from js and the number selected by user
    console.log(`${randomNum} = ${num}`)
    // This returns true or false depending on if number matcher
    return randomNum === num
    
}

console.log(makeGuess(3))


