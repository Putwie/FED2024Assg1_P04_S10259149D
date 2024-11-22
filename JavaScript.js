// Function to show the alert when button clicked by user
function showMessage() {
    alert("STRAY KIDS EVERYWHERE ALL AROUND THE WORLD!");
  }
  
  // Show the button when scrolling down
window.onscroll = function() {
  const button = document.getElementById('backToTop');
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    button.style.display = "block"; // Show the button when scrolled down
  } else {
    button.style.display = "none"; // Hide the button when at the top
  }
};

// Scroll to the top when the button is clicked
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
