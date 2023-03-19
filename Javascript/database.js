// // Change the color of nav-item when u mouseover
let navItems = document.querySelectorAll(".nav-item");
navItems.forEach(function (navItem) {
    let navTitle = navItem.querySelector(".nav-title");

    navItem.addEventListener("mouseover", function () {
        navTitle.style.color = "#fff";
    });
    navItem.addEventListener("mouseleave", function () {
        navTitle.style.color = "#eee5d6";
    });
});
// Show the sub-menu and change the color when mouseover
for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("mouseover", function () {
        let subElement = this.querySelector(".nav-sub-list");
        subElement.style.display = "block";
    });
    navItems[i].addEventListener("mouseleave", function () {
        let subElement = this.querySelector(".nav-sub-list");
        subElement.style.display = "none";
    });
}
// Turn on  clicks on sign in
let signinBTN = document.querySelector(".btn-login");
signinBTN.addEventListener("click", function () {
    let loginElement = document.querySelector("#login-page");
    loginElement.style.left = "50%";
    let btnExitlogin = document.querySelector("#login-page .btn-exit");
    btnExitlogin.addEventListener("click", function () {
        let loginElement = document.querySelector("#login-page");
        loginElement.style.left = "-100%";
    });
});

// Turn on and off when clicks on sign up
let regBTN = document.querySelector(".btn-register");
regBTN.addEventListener("click", function () {
    let regElement = document.querySelector("#sign-up-Page");
    regElement.style.display = "block ";
});
let btnExitreg = document.querySelector("#sign-up-Page .btn-exit");
btnExitreg.addEventListener("click", function () {
    let regElement = document.querySelector("#sign-up-Page");
    regElement.style.display = "none";
});
//
// Scroll to top website and sticky head off
let prevScrollPos = window.pageYOffset;
let headerElement = document.getElementById("header_block");

window.onscroll = function () {
    let topPos = window.pageYOffset;
    if (prevScrollPos > topPos) {
        headerElement.classList.add("active");
        headerElement.classList.add("active-filter");
    } else {
        headerElement.classList.remove("active");
        headerElement.classList.add("active-filter");
    }
    prevScrollPos = topPos;
    if (topPos == 0) {
        headerElement.classList.remove("active");
        headerElement.classList.remove("active-filter");
    }
};
// Scroll hair style list
let dot1 = document.querySelector(".dot:first-child");
let dot2 = document.querySelector(".dot:nth-child(2)");
let btnleft = document.querySelector(".btn-left");
let btnright = document.querySelector(".btn-right");
const hairListElement = document.querySelector(".hair-list");
btnright.addEventListener("click", function (e) {
    hairListElement.scrollLeft += 1300;
});
btnleft.addEventListener("click", function (e) {
    hairListElement.scrollLeft -= 1300;
});
const dots = document.querySelectorAll(".dot");
let currentDotIndex = 0;
function highlightDot(dotIndex) {
    dots[currentDotIndex].classList.remove("large-dot");
    dots[dotIndex].classList.add("large-dot");
    currentDotIndex = dotIndex;
}

hairListElement.addEventListener("scroll", function () {
    if (hairListElement.scrollLeft >= 0 && hairListElement.scrollLeft < 1300) {
        highlightDot(0);
    } else if (
        hairListElement.scrollLeft >= 1300 &&
        hairListElement.scrollLeft < 2600
    ) {
        highlightDot(1);
    } else if (
        hairListElement.scrollLeft >= 2600 &&
        hairListElement.scrollLeft < 3900
    ) {
        highlightDot(2);
    }
});
// Show an post when click on element
