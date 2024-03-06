function ehPrimo(n:number):boolean {
    let contador : number = 0;
    
    if(n > 1) {
        for(let i = 1; i <= n; i++) {
            if(n % i == 0) {
                contador++;
            }
        }

        if(contador > 2) {
            return false;
        }
    }
    
    
    return true;
}

console.log(ehPrimo(3));
console.log(ehPrimo(6));
