

const checkbox = document.getElementById('ipromise');
const puoiprocedere = document.getElementById('youcan');

function puoicheckkare() {

  checkbox.addEventListener('click', function() {
    puoiprocedere.style.backgroundColor="#00ffff"
    const anchor= document.querySelector("a")
    anchor.href="./Benchmark.html";
    });
  }

  //RICHIAMO FUNZIONI
  puoicheckkare();