const alunos = ['joao','juliana','caio','ana'];
const medias = [10, 7 , 9 , 6];

let listaNotasAlunos = [alunos, medias];
//includes - retorna true or false
function procurandoElemento(nomeAluno){
    if(listaNotasAlunos[0].includes(nomeAluno)){      
        const indice = listaNotasAlunos[0].indexOf(nomeAluno)
        return listaNotasAlunos[0][indice] + ', sua média é: '+ listaNotasAlunos[1][indice];
    } else{
        return 'Aluno não encontrado!'
    }
}
console.log(procurandoElemento('ana'))
console.log(procurandoElemento('Pedro'))