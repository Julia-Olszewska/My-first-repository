function sumuj(start, koniec, pomijana) {
    let suma = 0;
    for (let x = start; x <= koniec; x++) {
      if (x != pomijana) {

        suma = suma + x;
      }
        

      
    }
    return suma;
  }
  

  console.log(sumuj(5, 10, 9));

  function sumuj(start, koniec, pomijana) {
    let suma = 0;
    for (let x = start; x <= koniec; x++) {
      if (x != pomijana) {

        suma = suma + x;
      }
    }
    return suma;
  }

  function sumuj2(start, koniec, pomijana) {
    let suma = 0;
    for (let x = start; x < pomijana; x++) {
        suma = suma + x ;
    }
    for (let x = pomijana+1; x <= koniec; x++) {
        suma = suma + x;
    }
    return suma;
  }
  
  console.log(sumuj(5, 10, 9));
  console.log(sumuj2(5, 10, 9));