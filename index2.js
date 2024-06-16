const http = require('http');

http.get('http://www.google.com', (dados)=>{
    console.log(dados)
})
