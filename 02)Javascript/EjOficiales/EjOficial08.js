    let cont = 0;
    let min = 999999;
    let max = 0;
    let prom = 0;
    let op;

    while (op != 0) {
    op = parseInt(window.prompt("Ingrese un numero"));
    prom += op;
    console.log(prom);
    cont++;

    if (op < min && op != 0) {
        min = op;
        console.log(min);
    } 
    if (op > max){
        max = op;
        console.log(max);
    }
    console.log(`Dio ${cont} vueltas y la suma de todo es: ${prom} El minimo es: ${min} y el maximo es: ${max} y el promedio es: ${prom/cont}`);
}