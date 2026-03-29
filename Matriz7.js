//                 0 ,     1    , 2    ,  3
const alunos = ['joao','juliana','caio','ana'];
const medias = [10, 7 , 9 , 6];
//              0 , 1 , 2 , 3

//                        0    ,   1
let listaNotasAlunos = [alunos, medias]; //array que gurada outros arrays

//        indice listaNotasAlunos, indice alunos
console.log(`${listaNotasAlunos[0][0]} sua média é ${listaNotasAlunos[1][0]}`);
//             listaNotasAlunos[alunos][joao] sua média é [medias][10]

const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media = 0
                                                //          notas1 /notas2 ou notas3
for (let i = 0; i < notasGerais.length; i++) { //notasGerais[0] / [1} ou [2]]
  for (let j = 0; j < notasGerais[i].length; j++) {// elementos dentro do array escolhido de notasGerais
    media += notasGerais[i][j]/notasGerais[i].length;
// media += notasGerais[0][0]/ notasGerais[0].length
//          [notas1][10] / notas1.length
//vai aumentando ate somar todas as notas de cada array e todos os arrays e depois divide pela
//quantidade de indices dos arrays para obter a média
    }
}
media = media/notasGerais.length

console.log(media)

