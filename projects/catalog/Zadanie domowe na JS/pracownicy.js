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
console.log(`Suma Pierwszych wypłat Anny i Stefana wynosiła ${annastefan}` );
console.log(srednia(pracownicy[0].zarobki));
console.log(srednia(pracownicy[1].zarobki));
console.log(srednia(pracownicy[2].zarobki));
console.log(srednia(pracownicy[3].zarobki));
console.log(srednia(pracownicy[4].zarobki));
