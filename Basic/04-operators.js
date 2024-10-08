// Operadores

// Operadores Aritméticos ************************************************************************************************

let a = 5;
let b = 10;

console.log(a + b); // Suma
console.log(a - b); // Resta
console.log(a * b); // Multiplicación
console.log(a / b); // División

console.log(a % b); // Módulo o Resto de la división
console.log(a ** b); // Exponente

a++; // Incremento
console.log(a);

b--; // Decremento
console.log(b);

// Operadores de Asignación ***********************************************************************************************

let myVariable = 2;
console.log(myVariable);
myVariable += 2;
myVariable = myVariable + 2;
console.log(myVariable);

myVariable -= 2;
myVariable *= 2;
myVariable /= 2;
myVariable %= 2;
myVariable **= 2;

// Operadores de Comparación **********************************************************************************************
// Los Operadores de Comparación se utilizan para comparar valores. Estos operadores devuelven un valor booleano("true" o "false") dependiendo si la comparación es verdadera o falsa.

// Operador de igualdad (==)
// Compara dos valores para ver si son iguales, sin tener encuenta el tipo de dato.

console.log(5 == "5"); // true (el valor es igual, aunque el tipo de dato no)

// Operador de Igualdad estricta (===)
// Compara dos valores para ver si son iguales y también si son del mimo tipo de dato.

console.log(5 === "5"); // false (el valor es igual, pero el tipo de dato no)
console.log(5 === 5); // true (el valor y el tipo son iguales)

// Operador de Desigualdad (!=)
// Compara dos valores para ver si son diferentes, sin tener encuenta el tipo de datos.

console.log(5 != "5"); // false (el valor es igual, pero el tipo es diferente)

// Desigualdad estricta (!==)
// Compara dos valores para ver si son direfentes o si son de tipos distintos.

console.log(5 != "5"); // true (el valor es igual, pero el tipo es distinto)
console.log(5 != 5); // false (el valor y el tipo son iguales)

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a == 6); // Igualdad por valor
console.log(a == "6"); // Igualdad por valor
// Cuando se utiliza el doble igual se está comparando la igualdad por valor
console.log(a === a); // Igualdad por identidad (por tipo y valor)
console.log(a === "6");
console.log(a != 6);
console.log(a !== "6");
console.log(0 == false); // true
console.log(1 == false); // false
console.log(2 == false); // false
console.log(0 == ""); // true
console.log(0 == " "); // true
console.log(0 == ""); // true
console.log(0 == "Hola"); // false
console.log(0 === ""); // false
console.log(undefined == null); // true
console.log(undefined === null); // false

// Truthy values (valores verdaderos)

// Todos los números positivos y negativos menos el cero
// Todas las cadenas de texto menos las vacias
// El boolean true

// Falsy values (valores falsos)

// 0
// On
// null
// undefined
// NaN
// EL boolean false
// Cadenas de textos vacías

// Operadores Lógicos *****************************************************************************************************

// and (&&): Cuando una de las comparaciones sea falsa, el resultado será falso. Si todas son verdaderas el resultado será verdadero.

console.log(5 > 10 && 15 < 20); // false
console.log(5 < 10 && 15 < 20); // true
console.log(5 < 10 && 15 > 20); // false
console.log(5 < 10 && 15 > 20 && 30 > 40); // false

// or (O), se representa por el símbolo doble pai (||). Si se cumple una de las comparaciones el resultado será verdadero.

console.log(5 > 10 || 15 > 20); // false
console.log(5 < 10 || 15 < 20); // true
console.log(5 < 10 || 15 > 20); // true
console.log(5 > 10 || 15 > 20 || 30 > 40); // false

console.log((5 > 10 && 5 > 10) || 15 < 20); // true

// not (!): con este operador lógico se invierte el resultado booleano, si es (false) nos dará (true)

console.log(!(5 > 10 && 15 < 20)); // true
console.log(!(5 > 10 || 15 < 20)); // false

// Operadores Ternarios - Es otra forma de escribir condicionales

const isRaining = true;

isRaining ? console.log("Esta lloviendo") : console.log("No está lloviendo");

// El Operador Ternario en JavaScript es una alternativa más compacta a las estructuras "if-else"

// Sintaxis del Operador Ternario

// condicón ? valorSiVerdadero : valorSiFalso;

let food = true;

food ? console.log("Dame, que tengo hambre") : console.log("me voy");
