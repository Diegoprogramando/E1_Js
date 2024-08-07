

alert("hola aca estaria E1 js NUCBA!");

/*
  // Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function ParImpar(numero) {
    if (numero % 2 === 0) {
        console.log(`${numero} Numero PAR.`);
    } else {
        console.log(`${numero} Numero IMPAR.`);
    }
}


ParImpar(12);
ParImpar(9); 

*/

//2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.


/*
function comparandoDosNumeros(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} es mayor que ${num2}.`);
    } else if (num1 < num2) {
        console.log(`${num2} es mayor que ${num1}.`);
    } else {
        console.log(`${num1} y ${num2} son iguales.`);
    }
}

comparandoDosNumeros(18, 15); 
comparandoDosNumeros(1, 3); 
comparandoDosNumeros(22, 22); 

*/

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.


/*
function multiploDeCinco(numero) {
    if (numero % 5 === 0) {
        console.log(`${numero} es múltiplo de 5.`);
    } else {
        console.log(`${numero} no es múltiplo de 5.`);
    }
}

multiploDeCinco(15); 
multiploDeCinco(17); 

*/


//4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.


/*
function imprimirNumeros(numero) {
    for (i = 0; i <= numero; i++) {
        console.log(i);
    }
}


imprimirNumeros(11);

*/

//5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
/*
function imprimirPalabra(palabra, numero) {
    for ( i = 0; i < numero; i++) {
        console.log(palabra);
    }
}


imprimirPalabra("NUCBA", 5);

*/

//6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
/*
function imprimirArray(array) {
    for (i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

const arrayAImprimir = [1, 2, 3, 4, 5];
imprimirArray(arrayAImprimir);

*/

//7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".


/*
function imprimirNumeros(array) {
    if (array.length !== 10) {
        console.log("El array debe contener exactamente 10 números.");
        return;
    }

    for (i = 0; i < array.length; i++) {
        if (i !== 4) {
            console.log(array[i]);
        }
    }
}

const miArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
imprimirNumeros(miArray);

*/

//8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.


/*
function multiplicarArray(array, numero) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] * numero);
    }
}

const miArray2 = [2, 4, 6, 8, 10];
const multiplicador = 2;
multiplicarArray(miArray2, multiplicador);

*/












