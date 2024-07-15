const formInfo = document.getElementById('userInfoForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nextButton = document.getElementById('nextButton');
const submitButton = document.getElementById("submitButton");


formInfo.addEventListener("keyup", () => {
    const allFilled = Array.from(formInfo.elements)
      .filter((field) => field.required)
      .every((field) => field.value);
  
    submitButton.disabled = !allFilled;
});

const popup = document.getElementById("popup");
const closeButton = document.getElementById("closePopup");

formInfo.addEventListener("submit", (event) => {
  // Prevent default form submission behavior (optional)
//   event.preventDefault();

  popup.style.display = "block";  // Show the popup

  closeButton.addEventListener("click", () => {
    popup.style.display = "none";
  });
});
