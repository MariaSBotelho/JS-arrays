//remover marcus e viviane da lista e adicionar rodrigo na lista

const lista = ['joão','marcus','viviane','italo','guilherme','lara','paulo','bia','juliana','maria'];

        // indice, quantos elementos serão removidos, qual elemento sera adicionado 
lista.splice(1, 2, 'Rodrigo')//remova e adicione elementos de qualquer lugar

console.log(`Lista atualizada: ${lista}`);

lista.splice(3, 0, 'Clara') //apenas adicionando elemento em lugar especifico do array 
console.log(`Lista atualizada: ${lista}`);

//indice de onde vai inserir o novo elemnto, quantos elementos quer tirar a partir do indice, elemento que será add


//nomes.push('Rodrigo'); //adicionando rodrigo á sala