let isModalOpened = false;

// Get the modal
const modal = document.getElementById("myModal");

// Get the <button> element that closes the modal
const closeButton = document.getElementsByClassName("modal-button")[0];

// When the user clicks on <button> (x), close the modal
closeButton.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (modal.style.display === 'block') {
//     modal.style.display = "none";
//   }
// }

let isFirstEventFired = false;
document.addEventListener("scroll", (event) => {
  // skip first scroll event
  if (!isFirstEventFired) {
    isFirstEventFired = true;
    return;
  }
  // If modal alrady open then do nothing
  if (modal.style.display === "block") {
    return;
  }
  // If modal not open, then is scroll more then 780 open modal
  if (window.scrollY > 780) {
    if (isModalOpened) {
      return;
    }
    modal.style.display = "block";
    isModalOpened = true;
  }
});

// Modal click login
const username = document.getElementById("username");
const phoneNumber = document.getElementById("phoneNumber");
const login = document.getElementById("login");

login.addEventListener("click", (event) => {
  if (!username.value) {
    alert("No username");
  }
  if (!phoneNumber.value) {
    alert("No phoneNumber");
  }
  if (username.value && phoneNumber.value) {
    alert(
      `Your username is: ${username.value}. Your phone number is: ${phoneNumber.value}`
    );
  }
});
