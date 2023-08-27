
/*
    Funkcje dla listy w JS:
    1. pop() - usuwa [zwraca] ostatni element z listy
    2. push(value) - dodaje value na koniec listy

    3. shift() - usuwa [zwraca] pierwszy element z listy
    4. unshift(value) - dodaje value na początek listy (przesuwa całą listę)
*/

// const array = [3, 4, 5];

// console.log("Lista początkowa:", array);

// array.push(6);
// array.push(7);
// console.log("Po wykonaniu push:", array);

// array.pop(); // 7
// array.pop(); // 6
// array.pop(); // 5
// console.log("Po wykonaniu pop:", array);

// array.unshift(-1);
// array.unshift(0);
// console.log("Po wykonaniu unshift:", array);

// array.shift(); // 0
// console.log("Po wykonaniu shift:", array);



//IMPLEMENTACJA KOLEJKI

class Queue {
    constructor() {
        this.items = [];
        this.direction = 'right'; // Исправлено: добавлен this для переменной direction и задано ей значение 'right'
    }

    isEmpty() {
        return this.items.length === 0; // Исправлено: сокращено условие
    }

    enqueue(value) { // Исправлено: изменено имя метода с Enqueue на enqueue
        if (this.direction === 'left') { // Исправлено: добавлен this для переменной direction
            this.items.unshift(value); // Исправлено: метод называется unshift, вызываем его от this.items
        } else {
            this.items.push(value); // Исправлено: метод называется push, вызываем его от this.items
        }
    }

    dequeue() { // Исправлено: изменено имя метода с Dequeue на dequeue
        if (this.direction === 'left') { // Исправлено: добавлен this для переменной direction
            return this.items.shift(); // Исправлено: метод называется shift, вызываем его от this.items
        } else {
            return this.items.pop(); // Исправлено: метод называется pop, вызываем его от this.items
        }
    }
}

var s = new Queue();
s.enqueue(10); // Исправлено: вызываем метод enqueue, а не unshift
s.enqueue(12); // Исправлено: вызываем метод enqueue, а не pop
s.dequeue(8);
s.dequeue(55);
console.log(s.items); // Выведет [10, 12]










