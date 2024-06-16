const fs = require('fs')

fs.readFile('teste.txt', 'utf-8', (err, dados) => {
    if(err)
        console.error(err)
    else
    console.log(dados)
})