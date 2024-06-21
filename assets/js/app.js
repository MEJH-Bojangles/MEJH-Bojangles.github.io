/* || SCROLL TO TOP BUTTON */
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const navigation = document.querySelector(".navigation");

mobileMenuIcon.addEventListener("click", () => {
  navigation.classList.toggle("show");
});

// Close the mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('show');
  });
});

// Hide the mobile menu when the screen size is larger than 768px
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navigation.classList.remove("show");
  }
});


//sticky nav bar offset
// Function to create an offset for anchor links
function offsetAnchor() {
  const offset = 100; // Adjust this value to your header height

  // Attach click event listener to each navigation link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (event) {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Get the target element
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      // Scroll to the target element with offset
      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: 'smooth'
      });
    });
  });
}

// Call the function when the document is loaded
document.addEventListener('DOMContentLoaded', offsetAnchor);


function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}