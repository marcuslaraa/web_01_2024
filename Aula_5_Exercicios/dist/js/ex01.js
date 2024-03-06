"use strict";
function ordenaArray(...array) {
    let ordena = array.sort((a, b) => a - b);
    return ordena;
}
console.log(ordenaArray(25, 14, 63, 18, 36, 15, 5, 8, 25));
