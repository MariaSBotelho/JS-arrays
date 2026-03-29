const notas = [10, 6.5 , 8 , 7.5]

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++){ // conta a quantidade de elementos do array(indices)
    somaDasNotas += notas[i] // soma os elementos do array
}

let media = somaDasNotas / notas.length 
// divide a soma dos elementos pela quantidade de indices

console.log(media);
console.log(somaDasNotas);