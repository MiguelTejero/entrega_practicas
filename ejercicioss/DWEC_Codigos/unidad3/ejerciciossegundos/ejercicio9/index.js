/**
 * @name getBiggestNumber
 * @description Devuelve el número más grande de un array
 * 
 * @param {number[]} numbers - Un array de números
 * @returns {Number} El número más grande del arrray {numbers}
 *
 * @example
 *  getBiggestNumber([3, 8, 2, 1, 10]) // returns 10
 */

function getBiggestNumber(numbers){
    mayor = 0;
    for(i = 0; i<=numbers.length; i++){
        if(mayor < numbers[i]){
            mayor = numbers[i];
        }
    }
    return mayor;
}

console.log(getBiggestNumber([3, 10, 4, 3, 6]));





/**
 * @name getRandomColorSequence
 * @description Devuelve una secuencia aleatoria de ciertos colores con cierta longitud
 * 
 * @param {string[]} colors - Array de colores a ser utilizados en la secuencia
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]} - Secuencia aleatoria de colores disponibles en {colors}, con longitud {length}
 *
 * @example
 *  getRandomColorSequence(["red", "blue", "green"], 4) // returns ['blue', 'red', 'red', 'green']
 */

function getRandomColorSequence(colors, length){
    nuevosColores = [];
    for(i=0;i<=length;i++){
        nuevosColores[i]=colors[Math.random()*(length)+1];
    }
    return nuevosColores;
}

console.log(getRandomColorSequence(["blue", "green", "black"], 4));