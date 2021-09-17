const class1 = ['yasmin', 'isadora', 'benedita', 'brenda', 'luiza', 'fatima', 'caio', 'teresinha', 'hugo', 'zeca', 'catarina', 'emanuel', 'marcelo', 'claudio', 'marina', 'isabela', 'anthony', 'rebeca', 'filipe', 'laís', 'vinicius', 'helena', 'elisa', 'rodrigo', 'geraldo', 'yuri', 'marcio']
const class2 = ['benedita', 'elisa', 'emanuel', 'rodrigo', 'filipe', 'marcio', 'teresinha', 'laís', 'vinicius', 'marina', 'catarina', 'luiza', 'marcelo', 'rebeca', 'hugo', 'geraldo', 'zeca', 'caio', 'anthony', 'yasmin', 'claudio']
const class3 = ['isadora', 'isabela', 'laís', 'claudio', 'catarina', 'zeca', 'teresinha', 'emanuel', 'marcio', 'fatima', 'rodrigo', 'luiza', 'brenda', 'marina', 'marcelo', 'benedita', 'rebeca', 'filipe', 'helena', 'elisa', 'hugo', 'geraldo']

function bubbleSortDecrescente(lista,curr){ 
    //Deixando variável de contador para contar a iteração atual 
    //O array retornara quando o contador for igual ao comprimento do mesmo
    if(curr==lista.length){
        return lista;
    }
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] < lista[i + 1]) { 
            let newvar = lista[i];
            lista[i] = lista[i + 1];
            lista[i + 1] = newvar;
        }
    }
return bubbleSortDecrescente(lista,curr+1);
}

function bubbleSortCrescente(lista,curr){
    if(curr==lista.length){
        return lista;
    }
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > lista[i + 1]) {
            let newvar = lista[i];
            lista[i] = lista[i + 1];
            lista[i + 1] = newvar;
        }
    }
return bubbleSortCrescente(lista,curr+1);

}

console.log('Lista Decrescente: ');
console.log(bubbleSortDecrescente(class1,0));

console.log('\nLista Crescente: ');
console.log(bubbleSortCrescente(class1,0));


class1Ord = bubbleSortCrescente(class1, 0);
class2Ord = bubbleSortCrescente(class2, 0);
class3Ord = bubbleSortCrescente(class3, 0);




for(let i = 0; i < class1Ord.length; i++){ 
    faltas = 0; 
    if(!class2Ord.includes(class1Ord[i])){
        faltas++; //se o aluno não está na lista 2, colocará uma falta
    }
    if(!class3Ord.includes(class1Ord[i])){
        faltas++;//se o aluno não está na lista 3, add uma falta
    }
    console.log('Aluno: ' +class1Ord[i] +' Faltas: '+faltas); //retornara o nome do aluno e as faltas
}