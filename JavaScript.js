// Function to show the alert when button clicked by user
function showMessage() {
    alert("STRAY KIDS EVERYWHERE ALL AROUND THE WORLD!");
  }
  
  // Show the button when the user scrolls down
  window.onscroll = function() {
    var button = document.getElementById("backToTop");
    
    // Check if the user has scrolled down more than 200px
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      button.style.display = "block"; // Show the button when scrolled down
    } else {
      button.style.display = "none"; // Hide the button when at the top
    }
  };
  
  // Function to smoothly scroll back to the top when the button is clicked
  document.getElementById("backToTop").onclick = function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling effect
    });
  };