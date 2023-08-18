const array1 = [];
const array2 = [];

for (let i = 0; i <= 49; i++) {
    array1[i] = " " + parseFloat((Math.random() * 9).toFixed(2));
}

console.log("Array aleatorio: " + array1)

array1.sort();

console.log("Array ordenado: " + array1)

for (let i = 0; i <= 19; i++) {
    if (i < 10) {
        array2[i] = array1[i];
    } else {
        array2[i] = " " + 0.5;
    }
}

console.log("Array B: " + array2)