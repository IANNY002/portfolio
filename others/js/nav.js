let prevScrollPos = window.scrollY;
const navbar = document.getElementById("myNavbar");

window.onscroll = function () {
    const currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos) {
        // Scrolling up, show the navbar
        navbar.style.transform = "translateY(0)";
    } else {
        // Scrolling down, hide the navbar
        navbar.style.transform = "translateY(-100%)";
    }

    prevScrollPos = currentScrollPos;
};
