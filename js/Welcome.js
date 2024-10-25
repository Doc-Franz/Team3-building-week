const checkbox = document.getElementById("iPromise");

const blueBtn = document.getElementById("youCan");

blueBtn.onclick = (event) => {
  event.preventDefault();

  if (checkbox.checked) {
    window.location.href = "./Benchmark.html";
  } else {
    alert("Devi selezionare la casella per procedere."); // Messaggio se non è selezionata
  }
};
