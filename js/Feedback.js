// GLOBAL VARIABLES

const starsNumbers = 10;
const feedback = ["Sorry, tell us what we can improve on!", "Thank you, we will try to improve!", "Thanks for the great feedback!"];

let feedbackIndex = 0;

// GENERATING STARS

const generatingStars = () => {
  const starsBlock = document.getElementById("stars-block");
  const stars = document.querySelector(".stars").outerHTML;

  for (let i = 0; i < starsNumbers - 1; i++) {
    const emptyArea = document.createElement("figure");

    emptyArea.innerHTML = stars;
    starsBlock.appendChild(emptyArea);
  }
};

// FEEDBACK WITH STARS

const giveMeFeedback = (feedback) => {
  const starsClicked = document.querySelectorAll(".stars");
  starsClicked.forEach(
    (element, index) =>
      (element.onclick = () => {
        starsClicked.forEach((star, starIndex) => {
          const pathElement = star.querySelector("path");
          if (starIndex <= index) {
            pathElement.style.fill = "#00ffff";
          } else {
            pathElement.style.fill = "white";
          }
        });
        feedbackIndex = index;
      })
  );
};

// SHOW FEEDBACK

const textFeedback = document.getElementById("text-comment");

textFeedback.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();

    if (textFeedback.value.trim() === "") {
      alert("Compilare il campo di feedback");
      return;
    }
    const contentFeedback = document.createElement("p");
    if (feedbackIndex < 5) {
      contentFeedback.innerText = feedback[0];
    } else if (feedbackIndex > 5 && feedbackIndex < 8) {
      contentFeedback.innerText = feedback[1];
    } else {
      contentFeedback.innerText = feedback[2];
    }

    alert(`${contentFeedback.innerText}`);
    textFeedback.value = "";
  }
});

window.onload = () => {
  generatingStars(starsNumbers);
  giveMeFeedback(feedback);
};
