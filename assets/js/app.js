/* || SCROLL TO TOP BUTTON */
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

/* || BURGER MENU */
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

// close hamburger menu when a link is clicked

// select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
link.addEventListener("click", () => {
    ul.classList.remove("show");
})
);

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