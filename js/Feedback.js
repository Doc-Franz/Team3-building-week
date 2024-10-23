// GLOBAL VARIABLES

const starsNumbers = 10;
const feedback = ["Sorry, tell us what we can improve on!", "Thank you, we will try to improve!", "Thanks for the great feedback!"];

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
        const title = document.getElementById("title");
        if (index < 5) {
          title.innerText = feedback[0];
        } else if (index >= 5 && index < 8) {
          title.innerText = feedback[1];
        } else {
          title.innerText = feedback[2];
        }
      })
  );
};

// SHOW FEEDBACK

const textFeedback = document.getElementById("text-comment");
console.log(textFeedback);

textFeedback.addEventListener("keydown", function (e) {
  console.log(textFeedback.textContent);
  if (e.key === "Enter") {
    e.preventDefault();
    const contentFeedback = document.createElement("p");
    contentFeedback.innerText = textFeedback.value;
    alert(`Your feedback is ${contentFeedback.innerText}`);
    textFeedback.value = "";
  }
});

window.onload = () => {
  generatingStars(starsNumbers);
  giveMeFeedback(feedback);
};
