// for (let i = 1; i <= 10; i++) {
//     if (i >= 2 && i < 5) {
//     console.log (`Это выражение появилось в консоле ${i} раза`);
//      } else {
//         console.log (`Это выражение появилось в консоле ${i} раз`);
// }
// }


// const arr = [
//     "John",
//     "Travolta",
//     1998,
//     true,
//     "Ukraine",
//     true
// ]

// for (i = 0; i <arr.length; i++) {
//     if (typeof arr[i] !== "string") continue //если типа данных в массиме не равен строке - пропусти 
//     console.log (arr[i])
// }


// // Пример рекурсии

// function randomInteger(min, max) {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }

// let s1 = 0;
// function moneyRecursion() {
//  let m = randomInteger(0, 100);
//  console.log ("add:"+ m);
//  s1 += m;
//  console.log("sum:" + s1);
//  if (s1 >= 300) return; // в рекурсии обязательно должно быть условие и пункт остановки через ретурн
//  moneyRecursion();    
// }
// moneyRecursion();

// // F(n) = F(n-1)*n


// function factorialR(n) {
//     if (n === 1) { // Исправлено: заменен оператор присваивания "=" на оператор сравнения "==="
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// console.log(factorial(5));

// function factorialI(n) {
//     let result = 1; // Исправлено: добавлено ключевое слово let для объявления переменной result
//     for (let i = 1; i <= n; i++) { // Исправлено: заменен знак ">" на "<=" и инициализирована переменная i с 1 чтобы цикл выполнялся до n включительно, чтобы учесть значение n.
//         result *= i;
//     }
// //     return result;
// // }

// // console.log(factorialI(5));

// // Factorial (6) = 1*2*3*4*5*6
// // n*(n-1)

// function facrotial2I (n) {
//     result = 1;
//     for (var i = 1; i <= n; i++) {
//         return result * n-1;
//     }
// }
// facrotial2I (5);

// function factorial2R (n) {
//     if (n === 0) {
//        return 1; 
//     } else { return n * factorial2R (n-1);
//     }
// }
// console.log ("The result for recursion:" + factorial2R(5));

// Fn = Fn-1 + Fn-2

// function Fibonacci1R (n) {
//     if (n === 0) {
//         return 0;
//     } if (n === 1) {
//         return 1;
//     } else { return Fibonacci1I (n-1) + Fibonacci1I (n-2)
//     }
// }
// console.log ("Fibonnacci:"+Fibonacci1I(7));

// function binarySearchI(array, value) {
//     var start = 0;
//     var end = array.length - 1;

//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2);

//         if (array[mid] === value) {
//             return mid;
//         } else if (array[mid] < value) {
//             start = mid + 1;
//         } else {
//             end = mid - 1;
//         }
//     }

//     return -1;
// }

// // function binarySearchR(array, value, start, end) {
// //     if (start > end) return -1;
// //     var mid = Math.floor((start + end) / 2);

// //     if (array[mid] === value) {
// //         return mid;
// //     } else if (array[mid] < value) {
// //         return binarySearchR(array, value, mid + 1, end);
// //     } else {
// //         return binarySearchR(array, value, start, mid - 1);
// //     }
// // }

// let numbers = [0, 2, 3, 4, 7, 7, 8, 8, 11, 12]
// console.log("Iteracyjne")
// console.log(binarySearchI(numbers, 4));
// console.log(binarySearchI(numbers, 7));
// console.log(binarySearchI(numbers, 10));

function selectionSort (arr) {
    for (var i = 0; i < arr.length -1; i++) {
        let minIndex = i;

        for (var j = i+1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
        minIndex = j; 
    }
    }
    let tmp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = tmp;
}
}
let arr = [54, 67, 21, 12, 9, 71, 39];
selectionSort (arr);
console.log(arr);



