

function tabliczkaMnozenia(max1,max2) {

    const c1max = max1;
    const c2max = max2;
    
    for (let x = 1; x <= c1max ;x = x + 1) {
        for (let y = 1; y <= c2max; y = y + 1) {
            console.log(x + " * " + y + " = " + (x * y));
        }
    }
    
    }
    
    console.log(tabliczkaMnozenia(20, 50));


    var tablica = [34, 67, 93, 20, 51, 90]; {
        for (tablica[0]; tablica[tablica.length]; tablica[-1])
    }

    const summa = (tablica.length*tablica.length)/6 
    console.log ("srednia"+"="+((tablica.length*tablica.length)/6))



    // tablice

var zarobki = [4000, 8000, 12000];
var glebokosci = [5, 9, 18, 16, 14];

function srednia(tablica) {
  var suma = 0;
  var koniec = tablica.length;

  for (let x = 0; x < koniec; x++) {
    suma = suma + tablica[x];
  }
  const srednia = suma / tablica.length;

  return srednia;
}

console.log(srednia(zarobki));
console.log(srednia(glebokosci))











var pracownicy = [
    {
        imie: "Anna",
        nazwisko: "Pawlak",
        rok: 1980,
        zarobki: [3,4,7,9,12,15,18]
    },
    {
        imie: "Jan",
        nazwisko: "Nowak",
        rok: 1990,
        zarobki: [2,4,5]
    },
    {
        imie: "Stefan",
        nazwisko: "Karas",
        rok: 1989,
        zarobki: [12,15,18]
    },
    {
        imie: "Adam",
        nazwisko: "Kowal",
        rok: 1995,
        zarobki: [2,4,7,9,18]
    },
    {
        imie: "Edward",
        nazwisko: "Krol",
        rok: 2002,
        zarobki: [12,15,18,2,4,7,9,12,15,18,2,4,7,9]
    },
  ];

//prezslanianie zasiegu funkcyjnego przez blokowy
var j = 100;
for(let j = 100; j < 200; j = j + 1) {
    console.log(window.j+" "+j);
}
console.log("*"+j);
//pomiecie deklaracji poczatkowej w for oraz "aftermath" czyli instrukcji
//wykonywanej po kazdym obiegu
var j = 100;
for(; j < 200; ) {
    console.log("2. " +j);
    j = j + 1;
}
console.log("*"+j);
//pomiecie deklaracji poczatkowej w for oraz "aftermath" czyli instrukcji
//wykonywanej po kazdym obiegu
var j = 100;
for(; ; ) {
    console.log("3. " +j);
    j = j + 1;
    if (j > 199) {
        break;
    }
}
console.log("*"+j);
//while
let x = 50;
//for (; x < 200;) {
while (x < 200) {
    console.log("4." + x);
    x = x + 2;
    //przykład wczesniejszego przerwania poza warunkiem w while
    if (x > 100) {
        break;
    }
}
//do..while
let z = 4;
do {
    console.log("5." + z);
    z = z + 4;
} while (z < 50)
//continue
var j = 100;
for(let j = 100; j < 200; j = j + 1) {
    if (j == 151) {
        continue;
    }
    console.log("6."+j);
}
console.log("*"+j);
//labeled statement
const c1max = 20;
const c2max = 50;
for (let x = 1; x <= c1max ;x = x + 1) {
    for (let y = 1; y <= c2max; y = y + 1) {
        //console.log(x + " * " + y + " = " + (x * y));
        console.log(`${x} * ${y} = ${(x * y)}`, "[ok]");
    }
}
var zarobki = [4000, 8000, 12000];
const podatek = zarobki[1]*0.19;
console.log(`podatek wynosi ${podatek}`);
console.log(`ilosc analizowanych płac ${zarobki.length}`);
//liczenie sredniej
var zarobki = [4000, 8000, 12000];
var glebokosci = [5, 9, 18, 16, 14];
function srednia(tablica) {
    var suma = 0;
    var koniec = tablica.length;
    for (let x = 0; x < koniec; x++) {
      suma = suma + tablica[x];
    }
    const srednia = suma / tablica.length;
    return srednia;
  }
  console.log(srednia(zarobki));
  console.log(srednia(glebokosci));
  var tablicaTest = [1 , 4, "test", true, false, undefined];
  var tablicaZagn = [5, [true, [9, 7], "t1"], true];
  var zarobkiHist = [['Nowak',1000,2000,3000],['Kowal',1500],['Nowakowa',100, 500, 600]];
  var zm1 = tablicaZagn[1][2]; //t1
 var zm2 = tablicaZagn[1][1][1]; //7
 console.log(zm1, zm2);
 var zm3 = srednia(tablicaZagn[1][1]);
 console.log(zm3);
 var pracownik = {
    imie: "Novak",
    nazwisko: "Djokovic",
    rok: 1978
  }
  console.log (`${pracownik["imie"]} ${pracownik.nazwisko} ${ pracownik.rok}`);
  /*
  var pole = prompt('Podaj pole kotre chcesz wypisac');
  console.log (`${pracownik[pole]}`);
  */
  var pracownicy = [
    {
        imie: "Anna",
        nazwisko: "Pawlak",
        rok: 1980,
        zarobki: [3,4,7,9,12,15,18]
    },
    {
        imie: "Jan",
        nazwisko: "Nowak",
        rok: 1990,
        zarobki: [2,4,5]
    },
    {
        imie: "Stefan",
        nazwisko: "Karas",
        rok: 1989,
        zarobki: [12,15,18]
    },
    {
        imie: "Adam",
        nazwisko: "Kowal",
        rok: 1995,
        zarobki: [2,4,7,9,18]
    },
    {
        imie: "Edward",
        nazwisko: "Krol",
        rok: 2002,
        zarobki: [12,15,18,2,4,7,9,12,15,18,2,4,7,9]
    },
  ];
console.log(pracownicy[1].zarobki[1]);
var annastefan = pracownicy[0].zarobki[0] + pracownicy[2].zarobki[0];
console.log(`Suma Pierwszych wypłat Anny i Stefana wynosiła ${annastefan}` )




Wypisz srednie zarobki kazdego z pracownikow zdefiniowanych w zmiennej pracownicy. Uzyj funkcji srednia



console.log(srednia(pracownicy[0].zarobki));
console.log(srednia(pracownicy[1].zarobki));
console.log(srednia(pracownicy[2].zarobki));
console.log(srednia(pracownicy[3].zarobki));
console.log(srednia(pracownicy[4].zarobki));