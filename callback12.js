const nomes = ["Ana", "Ju", "Leo", "Paula"];

console.log(nomes); //puxam o array inteiro : ["Ana", "Ju", "Leo", "Paula"]
ImprimeNomes(nomes);

nomes.forEach(ImprimeNomes)// roda a função para todos os elementos do array

function ImprimeNomes(nome){
    console.log(nome);
}
