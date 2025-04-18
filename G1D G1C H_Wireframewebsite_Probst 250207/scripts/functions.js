/* Funktion um FAQ Fragen mit passender Antwort auszuklappen (Teilweise mit Copilot ergänzt) */

document.addEventListener('DOMContentLoaded', function() {
  const arrows = document.querySelectorAll('.arrow');

  arrows.forEach(arrow => {
      arrow.addEventListener('click', function() {
          const answer = this.parentElement.nextElementSibling;
          const helpful = answer.nextElementSibling;
          const isVisible = answer.style.display === 'block';

          answer.style.display = isVisible ? 'none' : 'block';
          helpful.style.display = isVisible ? 'none' : 'flex';
          this.classList.toggle('rotate');
      });
  });
});

/* Funktion um die Sitznummer anzuzeigen  + wasVisible Variable dass man den Knopf nur einmal drücken kann */

var wasVisible = false;

function displaySitznummer() {
  var text = document.getElementById("sitznummer");
  if (text.style.display != "block" && wasVisible === false) {
    text.style.display = "block";
    wasVisible = true; 
  }
}


/* Funktion um die Teilnahmebestätigung anzuzeigen */

function displayBestätigung() {
  var text = document.getElementById("sitznummer");
  text.style.display = "none";

  var text = document.getElementById("bestätigung");
  text.style.display = "block";
}

/* Funktion um Burgermenü zu zeigen/verstecken */


function displayBurgermenu(){
  var burgermenu = document.getElementById("burgermenu")
  if (burgermenu.style.display == "none") {
    burgermenu.style.display = "flex";
  }
  else {
    burgermenu.style.display = "none";
  }
}
