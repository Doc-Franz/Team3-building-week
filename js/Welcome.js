document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("myCheckbox");
  const blueBtn = document.getElementById("myButton");

  const toggleButton = () => {
    if (checkbox.checked) {
      blueBtn.disabled = false;
      blueBtn.classList.remove("disabled");
    } else {
      blueBtn.disabled = true;
      blueBtn.classList.add("disabled");
    }
  };
  checkbox.addEventListener("change", toggleButton);
});
