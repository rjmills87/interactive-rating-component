const ratingContent = document.getElementById("rating-content");
const thankyouContent = document.getElementById("thankyou-content");
const chosenRating = document.getElementById("chosen-rating");
const form = document.getElementById("ratings");

// Form Submission
form.addEventListener("submit", function (e) {
  e.preventDefault();
  chosenRating.innerText = form.rating.value;
  ratingContent.style.display = "none";
  thankyouContent.style.display = "flex";
});
