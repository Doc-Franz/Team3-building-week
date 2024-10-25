const checkbox = document.getElementById("iPromise");
const blueBtn = document.getElementById("youcan");
const examForm = document.getElementById("examForm");

const toggleButton = () => {
  blueBtn.disabled = !checkbox.checked;
};
/* console.log(checkbox.checked); */

checkbox.addEventListener("change", toggleButton);

examForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checkbox.checked) {
    window.location.href = "./Benchmark.html";
  }
});

toggleButton();
