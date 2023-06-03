/* This is required to make the navbar change color when scrolled */

/* Need to simplify */

const navbar_change = document.querySelector(".navbar_change");
const navbar_link_scroll_1 = document.querySelector(".navbar_link_scroll_1");
const navbar_link_scroll_2 = document.querySelector(".navbar_link_scroll_2");
const navbar_link_scroll_3 = document.querySelector(".navbar_link_scroll_3");
const navbar_button = document.querySelector(".navbar_button");
const bar_change_1 = document.querySelector(".bar_change_1");
const bar_change_2 = document.querySelector(".bar_change_2");
const bar_change_3 = document.querySelector(".bar_change_3");
const navbar_link_1 = document.querySelector(".navbar_link_1");
const navbar_link_2 = document.querySelector(".navbar_link_2");
const navbar_link_3 = document.querySelector(".navbar_link_3");

function active() {
    navbar_change.classList.add("active");
    navbar_link_scroll_1.classList.add("active");
    navbar_link_scroll_2.classList.add("active");
    navbar_link_scroll_3.classList.add("active");
    navbar_button.classList.add("active");
    bar_change_1.classList.add("active");
    bar_change_2.classList.add("active");
    bar_change_3.classList.add("active");
    navbar_link_1.classList.add("active");
    navbar_link_2.classList.add("active");
    navbar_link_3.classList.add("active");
}

function inactive() {
    navbar_change.classList.remove("active");
    navbar_link_scroll_1.classList.remove("active");
    navbar_link_scroll_2.classList.remove("active");
    navbar_link_scroll_3.classList.remove("active");
    navbar_button.classList.remove("active");
    bar_change_1.classList.remove("active");
    bar_change_2.classList.remove("active");
    bar_change_3.classList.remove("active");
    navbar_link_1.classList.remove("active");
    navbar_link_2.classList.remove("active");
    navbar_link_3.classList.remove("active");
}

// Variables for the curve section below the header
var curve = document.getElementById("curve");
var last_known_scroll_position = 0;
var default_curve_value = 350;
var curve_rate = 3;
var ticking = false;
var curve_value;

// Handle the functionality
function scrollEvent(scroll_position) {
    if (scroll_position >= 0 && scroll_position < default_curve_value) {
        curve_value =
            default_curve_value - parseFloat(scroll_position / curve_rate);
        curve.setAttribute(
            "d",
            "M 800 300 Q 400 " +
                curve_value +
                " 0 300 L 0 0 L 800 0 L 800 300 Z"
        );
    }
}

window.addEventListener("scroll", function (e) {
    last_known_scroll_position = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(function () {
            scrollEvent(last_known_scroll_position);
            ticking = false;
        });
    }
    if (window.pageYOffset >= 50) {
        active();
    } else {
        console.log("pass");
    }

    ticking = true;
});

/* Not allowed to have this function in order for the curve section below the header to function correctly
  window.addEventListener("load", function() {
    if (window.innerWidth > 576) {
      window.scrollY = 0;
    } else if (window.innerWidth < 577) {
      window.scrollY = 50;
    }

    if (window.scrollY >= 50) {
      active();
    }); */

window.addEventListener("resize", function () {
    if (window.innerWidth > 576) {
        window.scrollY = 0;
        console.log(window.scrollY);
    } else if (window.innerWidth < 577) {
        window.scrollY = 50;
    }

    if (window.scrollY >= 50) {
        active();
    } else {
        console.log("pass");
    }
});

document.getElementById("logout").addEventListener("click", async () => {
    console.log("test");
    await auth.signOut();
    location.href = "/login.html";
});
