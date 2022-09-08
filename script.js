//Definition einer einfachen Funktion
function kleiner10(input) {
  if(input < 10) {
    console.log(input + " ist kleiner als 10");
    return true;
  } else {
    //Befehle
  }
}

//Ausführung einer Funktion
kleiner10(8);



//DOM Funktion, die ausgeführt wird wenn Seite geladen ist
window.addEventListener("load", function() {
  document.getElementById("test").innerHTML = "Hello World!";
})


//Objektkonstruktor
function Konto(inhaber, kontostand) {
    this.inhaber = inhaber;
    this.kontostand = kontostand;
    this.einzahlung = function(betrag) {
        kontostand += betrag;
        console.log("neuer Kontostand: " + kontostand);
    }
}

//Objekt Erstellung
var meinKonto = new Konto("ich", 20);


//Ausführung Objektfunktion
meinKonto.einzahlung(20);
