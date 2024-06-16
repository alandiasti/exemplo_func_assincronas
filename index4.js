const fs = require('fs/promises')

const lerarc = async () => {
    try {
        const dados = await fs.readFile('teste.txt', 'utf-8');
        return dados;
    }catch(err){
        console.log(err)
        return "Sem arquivo";
    }
    
}

//console.log(lerarc())
//lerarc().then((x) => console.log(x))

// ---- OUTRO EXEMPLO ------- ////

const f1 = (a,b) => a + b;
const f2 = async(a,b) => {return f1(a, b)}

//console.log(f1(1,2)) -- aqui imprime o resultado 

//console.log(f2(1,2)) --- aqui imprime a promise

f2(1,2).then((x) => console.log(x)) // aqui imprime realmente o resultado
