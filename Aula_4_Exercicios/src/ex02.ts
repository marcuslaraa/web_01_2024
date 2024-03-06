function mediaPonderada(...notas:Notas[]) : number {
    
    let media = 0;
    for(let i = 0; i < notas.length; i++) {
        media += notas[i].nota * notas[i].peso
    }
    
    
    
    return media;
}

type Notas = {
    nota:number,
    peso:number;
}

let nota1 : Notas = {
    nota: 4,
    peso: 0.3
}

let nota2 : Notas = {
    nota: 2,
    peso: 0.2
}

let nota3 : Notas = {
    nota: 10,
    peso: 0.5
}

console.log(mediaPonderada(nota1, nota2, nota3));
