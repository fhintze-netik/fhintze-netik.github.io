let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

const scriptURL =
  "https://script.google.com/macros/s/AKfycbz6eVl5-MoaHz3IN6qkzWIpS-QHshI_UowOmS41utu0Vl3tbrBC0RfIaaMtSopRhVRs/exec";
const form = document.forms["contact-us"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
  document.getElementById("contact-form").reset();
});

function changeText(button, text, textToChangeBackTo) {
  buttonId = document.getElementById(button);
  buttonId.textContent = text;
  setTimeout(function () {
    back(buttonId, textToChangeBackTo);
  }, 5000);
  function back(button, textToChangeBackTo) {
    button.textContent = textToChangeBackTo;
  }
}
