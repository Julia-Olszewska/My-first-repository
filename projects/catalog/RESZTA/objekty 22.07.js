class Samochod {
    wlaczony: true,
    przebieg: 150000
    sila nacisniecia gaz: 77
    bieg = [luz, 1, 2, 3, 4, 5, 6]

    wlacz();
    wylacz();
    ustawBieg (5);
    wcisnijGaz (55);

}


class Samochod {
    constructor (przebieg) {
        this.wlaczony = false;
        this.przebieg = przebieg;
        this.gaz = 0;
        this.bieg = 0;
    }
}
    wlacz() {
        this.wlaczony = true;
    }
    wylacz() {
        this.wlaczony = false;
    }
    ustawBieg(nrBiegu) {
        if (nrBiegu >= 0 && nrBiegu <= 6) {
            this.bieg = nrBiegu;}
        }
    wcisnijGaz(gazStopien) {
        if (gazStopien >= 0 && gazStopien <= 99) {
        this.gaz = gazStopien;
     }
    }

let mojSamochod = new Samochod(150000);


class Zadanie {
    #imie;
    constructor(imieKlient) {
        this.#imie = imieKlient;
        //console.log(this.#imie);
        
    }
    normalizuj() {
      
        
        const pierwszaLitera = this.#imie.substring(0,1);
        const pozostaleLitery = this.#imie.substring(1, this.#imie.length);
        return pierwszaLitera.toUpperCase() + pozostaleLitery.toLowerCase();
        
        //return this.#imie.substring(0,1).toUpperCase() + this.#imie.substring(1).toLowerCase();
        
    }
}
const klient = new Zadanie("iMIe");
console.log(klient.normalizuj());

