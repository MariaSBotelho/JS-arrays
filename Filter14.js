//filter - função callvack retorna true or false

const nomes = ["Ana","Marcos","Maria","Mauro"];
const notas = [7 , 4.5 , 8 , 7.5];
                                //      _ , indice
const reprovados = nomes.filter(function(aluno, indice){ // aluno não esta sendo utlizado, pode ser substituido por _
    return notas[indice] < 5;
});

console.log( `Reprovados : ${reprovados}`);