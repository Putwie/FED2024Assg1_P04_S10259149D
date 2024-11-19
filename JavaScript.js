// Function to show the alert when button clicked by user
function showMessage() {
    alert("STRAY KIDS EVERYWHERE ALL AROUND THE WORLD!");
  }
  
  // Show the button when the user scrolls down
  window.onscroll = function() {
    var button = document.getElementById("backToTop");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      button.style.display = "block"; // Show button
    } else {
      button.style.display = "none"; // Hide button
    }
  };
  
  // Function to scroll back to the top
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  