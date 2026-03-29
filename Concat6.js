const salaPynthon = ['guilherme','lara','paulo','bia'];
const salaJava = ['joão','marcus','viviane','italo'];

const salaUnificadas = salaPynthon.concat(salaJava); //junta dois arrays

console.log(`Alunos das turmas de python e java: ${salaUnificadas}`);
console.log(salaPynthon) //não modifica o array original 
//se necessario adicionar elementos no array original use push ou splice