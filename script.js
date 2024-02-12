// const form = document.getElementById("contactform"); // Adjust ID as needed

// form.addEventListener("submit", (event) => {
//   event.preventDefault(); // Stops default form submission
//   alert("Message sent succesfully");
//   form.reset();
// });

//different animations
const leftFade = "show-from-left-blur";
const rightFade = "show-from-right-blur";

const hiddenElement = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add(leftFade);
    } else {
      entry.target.classList.remove(leftFade);
    }
  });
});

hiddenElement.forEach((el) => observer.observe(el));
