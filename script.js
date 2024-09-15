const ratingContent = document.getElementById("rating-content");
const thankyouContent = document.getElementById("thankyou-content");
const chosenRating = document.getElementById("chosen-rating");
const submit = document.querySelector(".submit-btn");

// Get the selected value from rating form
const getRatingValue = () => {
  const rating = document.getElementsByName("rating");
  for (i = 0; i < rating.length; i++) {
    if (rating[i].checked) {
      chosenRating.innerText = rating[i].value;
    }
  }
};

// Form Submission
submit.addEventListener("click", function () {
  getRatingValue();
  ratingContent.style.display = "none";
  thankyouContent.style.display = "flex";

  // Prevent page refresh on form submission
  document.getElementById("ratings").addEventListener("submit", function (e) {
    e.preventDefault();
  });
});
