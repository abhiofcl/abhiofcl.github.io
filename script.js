const form = document.getElementById("contactform"); // Adjust ID as needed

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Stops default form submission
  alert("Message sent succesfully");
  form.reset();
});
