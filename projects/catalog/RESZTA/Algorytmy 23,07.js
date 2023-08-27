// // Rozwiązanie iteracyjne
// function iterSumAll(n) {
//     var result = 0

//     for (let i = 1; i <=n; i++) {
//         result = result + i
//     }

//     return result
// }

// function recSumAll(n) {
//     if (n === 0) {
//         return 0
//     } else {
//         return n + recSumAll(n - 1)
//     }
// }

// console.log(
//     "Rozwiązanie iteracyjne:", iterSumAll(4)
// )

// console.log(
//     "Rozwiązanie rekurencyjne:", recSumAll(4)
// )

// //Fibonacci
// // Ciąg Fibonacciego
// // Rozwiązanie rekurencyjne

// function fibonacci(n) {
//     if (n === 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2)
//     }
// }

// function fibonacciIterative(n) {
//     let x = 0;
//     let y = 1;
//     let sum;
//     let i;

//     for (i = 1; i < n; i++) {
//         sum = x + y;
//         x = y;
//         y = sum;
//     }
//     return y;
// }

// console.log(
//     "[R] Ciąg Fibonacciego dla 5 ->", fibonacci(5), "dla 10->", fibonacci(10),
//     "dla 13->", fibonacci(13)
// )

// console.log(
//     "[I] Ciąg Fibonacciego dla 5 ->", fibonacciIterative(5), "dla 10->", fibonacciIterative(10),
//     "dla 13->", fibonacciIterative(13)
// )

// // Napisać program, który oblicza potęgę n o podstawie 2 w sposób iteracyjny i rekurencyjny.
// function powerI(n) {
//     let result = 1;

//     for (let i = 1; i <= n; i++) {
//         result = result * 2;
//     }

//     return result;
// }

// function powerR(n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return 2 * powerR(n - 1);
//     }
// }

// console.log("Potęgowanie")
// console.log("[I] 2^1 =", powerI(1), ", 2^3 =", powerI(3))
// console.log("[R] 2^1 =", powerR(1), ", 2^3 =", powerR(3))

// //bubbles

// // let numbers = [4,7,1,3,0,3,5,7,9,2,1]

// // function bubbleSort(array) {
// //     for (var i = 0; i < array.length; i++) {
// //         console.log("----- Iteracja numer", i, "-----")
// //         console.log(array)

// //         for (var j = 0; j < array.length - i; j++) {
// //             if (array[j] > array[j + 1]) {
// //                 var tmp = array[j];
// //                 array[j] = array[j + 1];
// //                 array[j + 1] = tmp;
// //             }
// //         }
// //     }
// // }

// // bubbleSort(numbers)
// // // console.log(numbers)


// // Sortowanie przez wstawianie:
// // let numbers = [4,7,1,3,0,3,5,7,9,2,1]

// // function insertSort(array) {
// //     for (let i = 1; i < array.length; i++) {
// //         let pointer = i - 1;
// //         let current = array[i];

// //         while ( (pointer >= 0) && (current < array[pointer]) ) {
// //             array[pointer + 1] = array[pointer];
// //             pointer--;
// //         }

// //         array[pointer + 1] = current;
// //     }

// // }

// // insertSort(numbers)
// // console.log(numbers)

var lista1 = [2,5,1,9];
var lista2 = [0,4,3,7];
 
function Merge () {
var wspolnalista = lista1 + lista2; 
return wspolnalista;
var start = wspolnalista[0];
var middle = wspolnalista[3];
var end = wspolnalista[7];
for (i=1; i<wspolnalista.lenght; i++) {
    wspolnalista[i] <
}

}
Merge (lista1, lista2);


