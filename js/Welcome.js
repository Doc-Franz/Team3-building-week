const checkbox = document.getElementById("iPromise");
console.log(checkbox);
const blueBtn = document.getElementById("youCan");
const examForm = document.getElementById("examForm");

console.log("is checked", checkbox.checked);

const toggleButton = () => {
  blueBtn.disabled = !checkbox.checked;
  console.log("Toggle Button: ", blueBtn.disabled); //true
};
/*  */

checkbox.onchange = toggleButton;

examForm.onsubmit = (event) => {
  alert("Form submitted!");

  event.preventDefault();
  console.log("is checked?", checkbox.checked);
  if (checkbox.checked) {
    window.location.href = "./Benchmark.html";
  } else {
    alert("Devi selezionare la casella per procedere."); // Messaggio se non è selezionata
    console.log("seleziona checkbox");
  }
};

toggleButton();
