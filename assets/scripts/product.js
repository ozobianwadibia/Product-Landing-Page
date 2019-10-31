//function to check form input validation
function checkFormInput() {
  const emailInput = document.getElementById("email").value;
  if (emailInput == "") {
    alert("Please, enter a valid email");
    return false;
  }
}
