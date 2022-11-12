"use script";

// Grab the navigation buttons and menu
const openBtn = document.querySelector("#nav-open-btn");
const closeBtn = document.querySelector("#nav-close-btn");
const navigation = document.querySelector(".nav-bar");

// Show the navigation bar when the open button is clicked.
openBtn.addEventListener("click", () => {
  navigation.classList.add("show");
  closeBtn.classList.add("show");
});

// Hide the navigation bar when the close button is clicked.
closeBtn.addEventListener("click", () => {
  navigation.classList.remove("show");
  closeBtn.classList.remove("show");
});

// Hide the navigation bar when i click outside it or on a link.
document.onclick = function (event) {
  if (
    event.target.id !== "nav-open-btn" &&
    event.target.id !== "nav-close-btn" &&
    event.target.id !== "menu"
  ) {
    navigation.classList.remove("show");
    closeBtn.classList.remove("show");
  }
};
