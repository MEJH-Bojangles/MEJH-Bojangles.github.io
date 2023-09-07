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
const navBarHeight = document.querySelector("nav").offsetHeight;

document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const targetOffsetTop = targetSection.offsetTop - navBarHeight;

            window.scrollTo({
                top: targetOffsetTop,
                left: 0,
                behavior: 'smooth'
            });

            ul.classList.remove('show');
        }
    });
});


function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}