function ehPar(numero:number) : boolean {
    if(numero % 2 == 0)
        return true;
    return false;
}

if(ehPar(10))
    console.log("É par");