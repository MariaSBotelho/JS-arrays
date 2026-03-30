//com a media de todos os alunos de 3 salas, calcule a média geral de cada sala

const salaJs = [7 , 8 , 8 , 7 , 10 , 6.5 , 4 , 10 , 7];
const salaJava = [6 , 5 , 8 , 9 , 5 , 6];
const salaPython = [7 , 3.5 , 8 , 9.5];

//reduce - reduz todos os valores de um array para um valor numerico
function mediaSala(notaDaSala){
    let somaDasNotas = notaDaSala.reduce((acum, atual) => {
        return acum + atual; //atual - em qual elemento ele esta no momento  | acumulado- valor que vai ser acumulado    
        }
    , 0); //0 , começa a acumular a partir do valor estabelecido
    return somaDasNotas / notaDaSala.length;
}
console.log(`Média da sala de JavaScript: ${mediaSala(salaJs)}`)
console.log(`Média da sala de Java: ${mediaSala(salaJava)}`)
console.log(`Média da sala de Python: ${mediaSala(salaPython)}`)


/* //media das salas juntas com for
const salas = [salaJs , salaJava , salaPython];
let media = 0;

for(let i = 0; i < salas.length; i++){
    for(let j = 0; j < salas[i].length; j++){
        media += salas[i][j] /salas[i].length  ;
        console.log(`media: ${media}, salas${salas[i][j]}`)
    }
}

media = media/salas.length;
console.log(`media: ${media}`)
*/

