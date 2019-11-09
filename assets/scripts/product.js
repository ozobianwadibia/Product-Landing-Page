// toggle function for the links on navbar
function toggle() {
  const navbar = document.getElementById("nav-bar");
  if (navbar.className === "nav-bar") {
    navbar.className += " responsive";
  } else {
    navbar.className = "nav-bar";
  }
}

//function to check form input validation
function checkFormInput() {
  const emailInput = document.getElementById("email").value;
  if (emailInput == "") {
    alert("Please, enter a valid email");
    return false;
  }
}
