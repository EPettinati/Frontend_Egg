const array1 = [];
const array2 = [];

for (let i = 0; i <= 4; i++) {
    array1[i] = Math.floor(1 + Math.random() * (10 - 1 + 1));
    array2[i] = Math.floor(1 + Math.random() * (10 - 1 + 1));
}

console.log("Array numero 1: " + array1 + "\n" + "Array numero 2: " + array2)