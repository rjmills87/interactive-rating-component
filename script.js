const ratingContainer = document.querySelector(".rating-container");
const thankyouContainer = document.querySelector(".thankyou-container");
const chosenRating = document.querySelector(".rating-confirmation span");
const form = document.querySelector(".ratings");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const ratingValue = form.rating.value;

  if (ratingValue) {
    chosenRating.innerText = ratingValue;

    ratingContainer.classList.add("hidden");
    thankyouContainer.classList.remove("hidden");
    thankyouContainer.classList.add("flex-display");
  } else {
    alert("Please choose a rating before you submit.");
  }
});
