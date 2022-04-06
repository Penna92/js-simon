// Descrizione:
// Visualizzare in pagina 5 numeri casuali (in un range tra 1 e 100). Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// GENERO 5 NUMERI CASUALI TRA 1 E 100 E LI INSERISCO IN UN ARRAY
let numeriGenerati = [];
let listaNumeriCasuali;
let i = 0;
let stringaNumeriGenerati = "";
while (numeriGenerati.length < 5) {
  const numeroCasuale = Math.floor(Math.random() * 100) + 1;
  if (!numeriGenerati.includes(numeroCasuale)) {
    numeriGenerati.push(numeroCasuale);
  }
}

console.log(numeriGenerati);

for (i = 0; i < numeriGenerati.length; i++) {
  listaNumeriCasuali = numeriGenerati[i];
  stringaNumeriGenerati = stringaNumeriGenerati + numeriGenerati[i] + " ";
}

//STAMPO QUESTI NUMERI SU SCHERMO
let contenitore = (document.getElementById("app").innerHTML +=
  numeriGenerati.join(" - "));

// FUNZIONE DI COUNTDOWN CON VERIFICA FINALE
let timeLeft = 30;
let elem = document.getElementById("timer");
let timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    document.getElementById("app").innerHTML = "";
  }
  if (timeLeft == -1) {
    clearTimeout(timerId);
    let stringaRisultante = chiediNumeri();
    document.getElementById(
      "app"
    ).innerHTML += `<div> I 5 numeri da te selezionati sono: ${stringaRisultante} </div> <div>I 5 numeri generati randomicamente sono: ${stringaNumeriGenerati} </div>`;
  } else {
    elem.innerHTML = timeLeft + " secondi rimasti per memorizzare i 5 numeri";
    timeLeft--;
  }
}

//CHIEDO I NUMERI ALL'UTENTE

function chiediNumeri() {
  let sceltaNumero;
  let arrayConfronto = [];
  let stringaNumeriScelti = "";
  for (let i = 0; i < numeriGenerati.length; i++) {
    sceltaNumero = parseInt(prompt("Inserisci il " + (i + 1) + "° numero :"));
    stringaNumeriScelti = stringaNumeriScelti + sceltaNumero + " ";
    console.log(stringaNumeriScelti);
    // console.log(numeriGenerati[i]);
    if (
      numeriGenerati.includes(parseInt(sceltaNumero)) &&
      !arrayConfronto.includes(sceltaNumero)
    ) {
      arrayConfronto.push(sceltaNumero);
      console.log(arrayConfronto, arrayConfronto[i]);
      console.log(numeriGenerati[i]);
      document.getElementById("app").innerHTML += `${
        i + 1
      }° numero inserito : ${sceltaNumero} (Giusto!) <br>`;
    } else {
      document.getElementById("app").innerHTML += `${
        i + 1
      }° numero inserito : ${sceltaNumero} (Sbagliato!) <br>`;
    }
  }

  //   console.log(listaNumeriCasuali);
  //   console.log(numeriGenerati);
  return stringaNumeriScelti;
}
