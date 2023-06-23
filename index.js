// This code will toggle the visibility of the sections
function toggleSection(section) {
    section.classList.toggle("hidden");
  }
  
  // Click event handlers for the sections
  document.querySelector(".student a").addEventListener("click", function() {
    toggleSection(document.querySelector(".student"));
  });
  
  document.querySelector(".faculty a").addEventListener("click", function() {
    toggleSection(document.querySelector(".faculty"));
  });
  
  document.querySelector(".warden a").addEventListener("click", function() {
    toggleSection(document.querySelector(".warden"));
  });
  