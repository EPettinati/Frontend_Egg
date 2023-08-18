// Forma 1
const matriz = [
    [3, 6, 9],
    [12, 15]
];

console.log(matriz);

const array = [5];
let k = 0;

for (let i = 0; i <= 1; i++) {
    for (let j = 0; j <= 2; j++) {
        array[k++] = matriz[i][j];
    }
}

for (let k = 0; k <= 4; k++) {
    array[k] += 3;
}

array.splice(5,1)

console.log(array);

// Forma 2
const matriz2 = [[3], [6], [9], [12], [15]];
const nuevoArray = [];

for (let i = 0; i < matriz2.length; i++) {
    nuevoArray.push(matriz2[i][0] + 3);
}

console.log(nuevoArray);