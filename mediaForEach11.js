// for each é um método 
//já faz um loop automaticamente um loop pelos elementos do array
//foreach = para cada nota vao ser executado {oque estiver dentro do escopo}
const notas = [10, 6.5 , 8 , 7.5]

let somaDasNotas = 0;

notas.forEach(notas =>{
    somaDasNotas += notas;
})
//ou
//notas.forEach(function(nota){
//    somaDasNotas += nota;
//})

let media = somaDasNotas / notas.length

console.log(media)
