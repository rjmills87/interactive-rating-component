const ratingContent = document.getElementById("rating-content");
const thankyouContent = document.getElementById("thankyou-content");
const chosenRating = document.getElementById("chosen-rating");
const form = document.getElementById("ratings");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const ratingValue = form.rating.value;

  if (ratingValue) {
    chosenRating.innerText = ratingValue;

    ratingContent.classList.add("hidden");
    thankyouContent.classList.remove("hidden");
    thankyouContent.classList.add("flex-display");
  } else {
    alert("Please choose a rating before you submit.");
  }
});
