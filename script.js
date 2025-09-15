"use strict";
//Declaring variables
//Inputs
const firstname = document.querySelector(".first-name");
const lastname = document.querySelector(".last-name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

//Errors
const firstname_error = document.querySelector(".firstname-error");
const lastname_error = document.querySelector(".lastname-error");
const email_error = document.querySelector(".email-error");
const password_error = document.querySelector(".password-error");

//Success
const successMessage = document.querySelector(".submitted");
const overlay = document.querySelector(".overlay");
const user = document.querySelector(".user");

//Btns
const claim = document.querySelector(".claim");

//Functions
function validateFirstName() {
  if (firstname.value === "") {
    firstname.classList.add("error-shake");

    firstname.classList.add("error-img");
    
    firstname_error.style.color = "red";

    firstname_error.textContent = "First Name cannot be empty";

    firstname.style.border = "1px solid red";

    firstname.removeAttribute("placeholder");

  } else {
    firstname.classList.remove("error-shake");

    firstname.classList.remove("error-img");

    firstname_error.textContent = "This name is valid";

    firstname_error.style.color = "lightgreen";

    firstname.style.border = "1px solid lightgreen";
  }
}

function validateLastName() {
  if (lastname.value === "") {
    lastname.classList.add("error-shake");

    lastname.classList.add("error-img");

    lastname_error.style.color = "red";

    lastname_error.textContent = "Last Name cannot be empty";

    lastname.style.border = "1px solid red";
    
    lastname.removeAttribute("placeholder");

  } else {
    lastname.classList.remove("error-shake");

    lastname.classList.remove("error-img");

    lastname_error.textContent = "This name is valid";

    lastname_error.style.color = "lightgreen";

    lastname.style.border = "1px solid lightgreen";
  }
}

function validateEmail() {
  if (email.value.toLowerCase().endsWith("@gmail.com")) {
    email_error.style.color = "lightgreen";

    email_error.textContent = "This email is valid";

    email.style.border = "1px solid lightgreen";

    email.classList.remove("error-img");
  } else {
    email.classList.add("error-shake");

    email.classList.add("error-img");

    email_error.style.color = "red";

    email_error.textContent = "Looks like this is not an email";

    email.style.border = "1px solid red";

    email.setAttribute("placeholder", "email@example/com");

    email.classList.add("placeholder-color");
  }
}

function validatePassword() {
  if (password.value === "") {
    password.classList.add("error-shake");

    password.classList.add("error-img");

    password_error.style.color = "red";

    password_error.textContent = "Password cannot be empty";

    password.style.border = "1px solid red";

    password.removeAttribute("placeholder");

  } else {
    password.classList.remove("error-shake");

    password.classList.remove("error-img");

    password_error.textContent = "This password is valid";

    password_error.style.color = "lightgreen";

    password.style.border = "1px solid lightgreen";
  }
}

function success() {
  successMessage.classList.remove("hidden");

  successMessage.classList.add("fade-in");

  user.textContent = `Thank you ${firstname.value}!`;
  
  overlay.classList.remove("hidden");
}

function resetForm() {
  successMessage.classList.add("hidden");
  overlay.classList.add("hidden");

  firstname.value = "";
  lastname.value = "";
  email.value = "";
  password.value = "";

  firstname_error.textContent = "";
  lastname_error.textContent = "";
  email_error.textContent = "";
  password_error.textContent = "";

  firstname.style.border = "1px solid hsl(246, 25%, 77%)";
  lastname.style.border = "1px solid hsl(246, 25%, 77%)";
  email.style.border = "1px solid hsl(246, 25%, 77%)";
  password.style.border = "1px solid hsl(246, 25%, 77%)";

  firstname.setAttribute('placeholder', 'First Name');
  lastname.setAttribute('placeholder', 'Last Name');
  email.setAttribute("placeholder", "Email Address");
  email.classList.remove("placeholder-color");
  password.setAttribute('placeholder', 'Password');
}

//Form Validation
function validateForm() {
  validateFirstName();

  validateLastName();

  validateEmail();

  validatePassword();

  //If all conditions are met, display the success message
  if (
    firstname.value !== "" &&
    lastname.value !== "" &&
    email.value.toLowerCase().endsWith("@gmail.com") &&
    password.value !== ""
  ) {
    setTimeout(success, 1000);
  }
}
claim.addEventListener("click", validateForm);

overlay.addEventListener("click", resetForm);
