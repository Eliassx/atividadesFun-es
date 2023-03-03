let maiorNumero = -Infinity; 

for (let i = 0; i < 10; i++) {
  let numeros = parseFloat(prompt(`Digite o ${i+1} º número:`));
  
  if (numeros > maiorNumero) {
    maiorNumero = numeros;
  }
}
document.getElementById('info').innerHTML = (`O maior número digitado foi: ${maiorNumero}`)