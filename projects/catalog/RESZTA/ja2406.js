const ilosc = 3;
var wiekJan = 5;
var wiekTomek = 4;
let wiekAdrian = 3;
//ilosc = "nie wiem";
var przedszkoleOtwarte = true;

function poleKwadratu(dlugoscBoku) {
    console.log("wykonuje funkcje poleKwadratu");
    return dlugoscBoku * dlugoscBoku;
}

function obliczSumePol(dlugoscBokuKwadratu1, dlugoscBokuKwadratu2) {
    return poleKwadratu(dlugoscBokuKwadratu1) +
        poleKwadratu(dlugoscBokuKwadratu2);
}

console.log("Suma pol wynosi:" + obliczSumePol(5, 10));

console.log("Pole kwadratu wynosi:" + poleKwadratu(67));

console.log((wiekJan + wiekTomek + wiekAdrian) / ilosc);
wiekTomek = 6;
console.log((wiekJan + wiekTomek + wiekAdrian) / ilosc);



function TEST TEST () {
    for(let x=0; X<=20) {
        console.log('x='+x);
    }
    if (x=5; x=10; x=15);
}
    
TEST TEST ();








const ilosc = 3;
var wiekJan = 5;
var wiekTomek = 4;
let wiekAdrian = 3;
//ilosc = "nie wiem";
var przedszkoleOtwarte = true;

function poleKwadratu(dlugoscBoku) {
    let wynik = dlugoscBoku * dlugoscBoku;
    console.log("wykonuje funkcje poleKwadratu i pole wynosi" + wynik);
    for(let x = 0; x < 10; x++) {
        console.log('x='+x);
    }
    wypisz ("***"+x);
    return wynik;
}

function obliczSumePol(dlugoscBokuKwadratu1, 
    dlugoscBokuKwadratu2) {
    return poleKwadratu(dlugoscBokuKwadratu1) +
        poleKwadratu(dlugoscBokuKwadratu2);
}

function wypisz(tekst) {
    console.log("|" + tekst + '|');
}

function test() {
    wypisz("test");
}

wypisz("Suma pol wynosi:" + obliczSumePol(5, 10));

console.log("Pole kwadratu wynosi:" + poleKwadratu(67));

console.log((wiekJan + wiekTomek + wiekAdrian) / ilosc);
wiekTomek = 6;
wypisz((wiekJan + wiekTomek + wiekAdrian) / ilosc);

//wypisz("wynik=" + wynik);




const ilosc = 3;
var wiekJan = 5;
var wiekTomek = 4;
let wiekAdrian = 3;
//ilosc = "nie wiem";
var przedszkoleOtwarte = true;

function poleKwadratu(dlugoscBoku) {
    let wynik = dlugoscBoku * dlugoscBoku;
    console.log("wykonuje funkcje poleKwadratu i pole wynosi" + wynik);
    for(let x = 0; x < 10; x++) {
        console.log('x='+x);
    }
    if (dlugoscBoku == 100) {
        return 0;
    } else if (dlugoscBoku == 20) {
        return -5;
    } 
    else {
        wypisz ("***"+x);
        return wynik;
    }

}

function obliczSumePol(dlugoscBokuKwadratu1, 
    dlugoscBokuKwadratu2) {
    return poleKwadratu(dlugoscBokuKwadratu1) +
        poleKwadratu(dlugoscBokuKwadratu2);
}

function wypisz(tekst) {
    console.log("|" + tekst + '|');
}

function test() {
    wypisz("test");
}

wypisz("Suma pol:"+obliczSumePol(5,10));

console.log("Pole kwadratu:" + poleKwadratu(67));

console.log((wiekJan + wiekTomek + wiekAdrian) / ilosc);
wiekTomek = 6;
wypisz((wiekJan + wiekTomek + wiekAdrian) / ilosc);