//adicione um ponto extra as notas de um aluno

const notas = ["10, 9, 8 ,7 ,6"]; //11 não pode -limite
const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota); // aumenta um em cada nota
console.log(notasAtualizadas);

const ponto = notas.map(function(nota){
    if(nota < 10 && nota > 0 ){
    nota++;
    } else{
        return nota;
    }
})
console.log(ponto);

//FoeReach executa o que esta dentro do dado, não retorna nada
//Map retorna como uma nova array  


//Padronizando nomes, apenas letras maiusculas
let nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

//percorre nome por nome no array colocando em maiuscula e retorna novo array com os nomes atualizados
const nomesAtualizados = nomes.map(function(nome){
    nome.toUpperCase()
})
console.log(nomesAtualizados)

