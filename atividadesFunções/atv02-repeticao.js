// const prompt = require("prompt-sync")();

const numero = parseInt(prompt('Digite um número: \n'));

for(let i = 0; i <= numero; i++) {
    if(numero % i === 0) {
        // console.log(i);
        document.getElementById('info').innerHTML += ` ${i}, `;
    }
}