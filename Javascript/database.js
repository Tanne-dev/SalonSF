// // Change the color of nav-item when u mouseover
let navItems = document.querySelectorAll(".nav-item");
// navItems.forEach(function (navItem) {
//     let navTitle = navItem.querySelector(".nav-title");

//     navItem.addEventListener("mouseover", function () {
//         navTitle.style.color = "#fff";
//     });
//     navItem.addEventListener("mouseleave", function () {
//         navTitle.style.color = "#eee5d6";
//     });
// });
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
    regElement.style.right = "20%";
    regElement.style.display = "block ";
});
let btnExitreg = document.querySelector("#sign-up-Page .btn-exit");
btnExitreg.addEventListener("click", function () {
    let regElement = document.querySelector("#sign-up-Page");
    regElement.style.right = "-100%";
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
    } else {
        headerElement.classList.remove("active");
    }
    prevScrollPos = topPos;
    if (topPos == 0) {
        headerElement.classList.remove("active");
    }
};
