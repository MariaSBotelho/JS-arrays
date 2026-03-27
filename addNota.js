
const notas = [10, 6 , 8];
console.log(notas);

//metodo de array que recebe parametro
notas.push(7); // push adiciona elemento no final do array
console.log(notas);

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`A média das notas é: ${media}`);