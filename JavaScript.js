// Function to show the alert when button clicked by user
function showMessage() {
    alert("STRAY KIDS EVERYWHERE ALL AROUND THE WORLD!");
  }
  
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
// Add an event listener for the button
scrollToTopBtn.addEventListener("click", function () {
  // Scroll to the top of the page
  window.scrollTo({
    top: 0, // Scroll to the top
    behavior: "smooth" // Smooth scrolling
  });
});
