{const controller = {
    name: '',
    lastname: ''
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
  
readline.question(`What's your name?`, name => {
    controller.name = name
})

readline.question(`What's your lastname?`, lastname => {
    controller.lastname = lastname
})

readline.close(() => {
    console.log('\n' +controller)
})
}