// const prompt = require("prompt-sync")();
let values = [];

for (let i = 0; i < 5; i++) {
    values[i] = parseFloat(prompt(`Digite o ${i+1}º número:`));
}

document.getElementById('info').innerHTML = `Maior número: ${Math.max(...values)}<br>Menor número: ${Math.min(...values)}`;