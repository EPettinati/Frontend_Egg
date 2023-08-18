// Forma 1
const array1 = [];
const array2 = [];

for (let i = 0; i <= 4; i++) {
    array1[i] = Math.floor(1 + Math.random() * (9 - 1 + 1));
    array2[i] = Math.floor(1 + Math.random() * (9 - 1 + 1));
    if (i > 2) {
        array1.pop();
    }
}

console.log("Array numero 1: " + array1 + "\n" + "Array numero 2: " + array2)

// Forma 2

const numeros = [1, 2, 3, 4, 5];

// Eliminar los dos últimos elementos
numeros.splice(-2);

console.log(numeros); // [1, 2, 3]
