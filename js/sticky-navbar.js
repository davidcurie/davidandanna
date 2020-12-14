// When the user scrolls the page, execute w3_stick 
window.onscroll = function() {w3_stick()};

// Get the navbar and sidebar
var navbar = document.getElementById("navbar");
var mySidebar = document.getElementById("mySidebar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function w3_stick() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("stickyNav");
    mySidebar.classList.add("stickySide");
  } else {
    navbar.classList.remove("stickyNav");
    mySidebar.classList.remove("stickySide");
  }
}

