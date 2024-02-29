function maiorValor(...lista : number[]):number {
    let maior : number = 0;
    for(let i = 0; i < lista.length; i++) {
        if(lista[i] > maior) {
            maior = lista[i];
        }
    }

    return maior;
}

console.log(maiorValor(10,5,25,35,68,16));