//sortowanie wybotem

let numbers = [4,7,1,3,0,3,5,7,9,2,1]

function selectionSort(array) {
    console.log("========== Lista wejściowa ==========")
    console.log(array)

    // Poruszanie się po każdym elemenecie (idx)
    for (let i = 0; i < array.length; i++) {
        let idxMinValue = i;

        // Szukanie idx gdzie jest najmniejsza wartość.
        for (let j = i + 1; j < array.length; j++) {
            if (array[idxMinValue] > array[j]) {
                idxMinValue = j;
            }
        }

        // Ustawienie pod array[i] najmniejszej wartości.
        let tmp = array[i];
        array[i] = array[idxMinValue];
        array[idxMinValue] = tmp;

        console.log("========== Lista po iteracji i=", i, "==========")
        console.log(array)
    }
}

selectionSort(numbers)
console.log(numbers)




  
  
  
  
  
Sortowanie szybkie (pivot na końcu):
function partition(array, start, end) {
    const pivot = array[end];
    let pointer = start;

    for (let i = start; i < end; i++) {
        if (pivot > array[i]) {
            [array[i], array[pointer]] = [array[pointer], array[i]];
            pointer++;
        }
    }

    [array[pointer], array[end]] = [array[end], array[pointer]]
    return pointer;
}

function quickSort(array, start, end) {
   if (start >= end) return;

   let idx = partition(array, start, end);

   // Lewa
   quickSort(array, start, idx - 1);
   // Prawa
   quickSort(array, idx + 1, end);
}

let numbers = [4,7,1,3,0,3,5,7,9,2,1]
quickSort(numbers, 0, numbers.length - 1)
console.log(numbers)




Sortowanie szybkie (pivot na środku):
let numbers = [4,7,1,3,0,3,5,7,9,2,1]

function swap(array, left, right) {
    var tmp = array[left];
    array[left] = array[right];
    array[right] = tmp;
}

function partition(array, left, right) {
    var pivot = array[Math.floor((left + right) / 2)];
    l = left;
    r = right;

    while (l <= r) {
        while (array[l] < pivot) {
            l++;
        }

        while (array[r] > pivot) {
            r--;
        }

        if (l <= r) {
            swap(array, l, r)
            l++;
            r--;
        }
    }
    return l;
}

function quickSort(array, left, right) {
    if (array.length > 1) {
        var index = partition(array, left, right);

        if (left < index - 1) {
            quickSort(array, left, index - 1)
        }

        if (right > index) {
            quickSort(array, index, right)
        }
    }
    return array;
}

console.log(quickSort(numbers, 0, numbers.length - 1))


//binarne sortowanie

function binarySearchI(array, value) {
    var start = 0;
    var end = array.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (array[mid] === value) {
            return mid;
        } else if (array[mid] < value) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}

function binarySearchR(array, value, start, end) {
    if (start > end) return -1;
    var mid = Math.floor((start + end) / 2);

    if (array[mid] === value) {
        return mid;
    } else if (array[mid] < value) {
        return binarySearchR(array, value, mid + 1, end);
    } else {
        return binarySearchR(array, value, start, mid - 1);
    }
}

let numbers = [0, 2, 3, 4, 7, 7, 8, 8, 11, 12]
console.log("Iteracyjne")
console.log(binarySearchI(numbers, 4));
console.log(binarySearchI(numbers, 7));
console.log(binarySearchI(numbers, 10));
console.log("Rekurencyjne")
console.log(binarySearchR(numbers, 4, 0, numbers.length - 1));
console.log(binarySearchR(numbers, 7, 0, numbers.length - 1));
console.log(binarySearchR(numbers, 10, 0, numbers.length - 1));



## Kategorie złożoności

1. Złożoność stała - O(1)
    - Operacje matematyczne
    - Wyświetlenie 1 elementu z listy
    - Wyśwoetlenie informacji na konsoli
2. Złożoność liniowa - O(n)
    - Wyszukiwanie liniowe
    - Operacje na pojedynczej pętli
3. Złożoność kwadratowa - O(n^2)/O(n*n)
    - Sortowanie bąbelkowe
    - Sortowanie przez wstawianie
    - Sortowanie przez wybór
4. Złożoność wielomianowa - O(n^k)
5. Złożoność logarytmiczna - O(log n)
    - Wyszukiwanie binarne
6. Złożoność liniowo logarytmiczna - O(n*log n)
    - Sortowanie szybkie
    - Sortowanie przez scalanie

## Typy złożoności

1. Czasowa
2. Pamięciowa

## Scenariusze złożoności

1. Optymistyczna
2. Oczekiwania
3. Pesymistyczna




//Struktury danych: stos

class Stack {
    constructor() {
        this.items = []
    }

    isEmpty() {
        if (this.items.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    pop() {
       return this.items.pop()
    }

    push(value) {
        this.items.push(value)
    }
}

var s = new Stack()
s.push(10)
s.push(12)
console.log(s.items)
var el = s.pop()
console.log(s.items, el)
console.log(s.isEmpty())