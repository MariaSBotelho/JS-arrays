const nomes = ['joão','marcus','viviane','italo','guilherme','lara','paulo','bia','juliana','maria'];

const sala1 = nomes.slice(0 , nomes.length/2); //seleciona um pedaço do array
const sala2 = nomes.slice(nomes.length/2); //quando não coloca nada no segundo parametro ele vai ate o final do array

console.log(`Alunos da sala 1: ${sala1}`); // 5 alunos
console.log(`Alunos da sala 1: ${sala2}`); // 5 alunos
console.log(nomes.length); //10
