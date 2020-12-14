// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}

// When the user scrolls the page, execute w3_stick 
window.onscroll = function() {w3_stick()};

// Get the navbar
var navbar = document.getElementById("navbar");

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

