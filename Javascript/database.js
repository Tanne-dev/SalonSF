// Turn on and off when clicks on sign up
let regBTN = document.querySelector(".header_cta");
regBTN.addEventListener("click", function () {
    let regElement = document.querySelector("#sign-up-Page");
    regElement.style.display = "block ";
});
// let btnExitreg = document.querySelector("#sign-up-Page .btn-exit");
// btnExitreg.addEventListener("click", function () {
//     let regElement = document.querySelector("#sign-up-Page");
//     regElement.style.display = "none";
// });
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
let btnleft = document.querySelector(".btn-left");
let btnright = document.querySelector(".btn-right");
const hairListElement = document.querySelector(".hair-list");
btnright.addEventListener("click", function (e) {
    hairListElement.scrollLeft += 1300;
});
btnleft.addEventListener("click", function (e) {
    hairListElement.scrollLeft -= 1300;
});

// Show an post when click on element
const itemsServiceElement = document.querySelectorAll(".service_item");
const itemsContainer = document.querySelector(".service_container");

itemsServiceElement.forEach(function (item) {
    item.addEventListener("click", function () {
        const contentId = item.getAttribute("data-content");
        let serviceBlockElement = document.getElementById("service_block");
        const content = document.getElementById(contentId);
        const containerElement =
            serviceBlockElement.querySelector(".service_container");
        containerElement.style.opacity = "1";
        containerElement.style.height = "450px";
        itemsContainer.innerHTML = content.innerHTML;
    });
});
//Slide Image
slideIndex = 0;
slideShow();
function slideShow() {
    const slides = document.getElementsByClassName("slideshow-image");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.opacity = 1;
    setTimeout(slideShow, 3000);
}
// Slide review
let slideReviewIndex = 0;
reviewShow();

function reviewShow() {
    const slidesReview = document.getElementsByClassName("testimonial_content");
    for (let i = 0; i < slidesReview.length; i++) {
        slidesReview[i].style.opacity = 0;
    }
    slideReviewIndex = (slideReviewIndex + 1) % slidesReview.length;
    slidesReview[slideReviewIndex].style.opacity = 1;

    setTimeout(reviewShow, 3000);
}

// Event scroll mouse down hidden nav-mobile
let navMobileElement = document.querySelector(".nav_mobile");
let checkboxElement = document.getElementById("nav_mobile_input");
window.addEventListener("scroll", function () {
    if (checkboxElement.checked) {
        checkboxElement.checked = false;
    }
});
// open signup page active overlay
let signUpElement = document.querySelector(".btn-booking");
const overlayElemnt = document.querySelector(".sign-up_overlay");
const signuppageElement = document.getElementById("sign-up-Page");
signUpElement.addEventListener("click", function () {
    overlayElemnt.style.display = "block";
    signuppageElement.style.display = "block";
});
// close booking page
let btnClose = document.querySelector(".btn-close-container");
btnClose.addEventListener("click", function () {
    overlayElemnt.style.display = "none";
    signuppageElement.style.display = "none";
});
let listCustomerAPI = "http://localhost:3000/customers";
// Get API data
function start() {
    getInfo();
}
start();
//  Connect website to API data
function getInfo(cb) {
    fetch(listCustomerAPI)
        .then(function (response) {
            return response.json();
        })
        .then(cb);
}
//  Listen event data click and render
let bookingBTN = document.querySelector(".booking-cta .btn");
bookingBTN.onclick = function () {
    let name = document.querySelector("#myInputName").value;
    let email = document.querySelector("#myInputEmail").value;
    let telefone = document.querySelector("#myInputTelefone").value;
    let bookingtime = document.querySelector("#myInputime").value;
    if (name === "" || email === "" || telefone === "" || bookingtime === "") {
        alert(" Please do not leave empty information..");
        return;
    }

    let dataForm = {
        name: name,
        email: email,
        telefone: telefone,
        bookingtime: bookingtime,
    };
    sendEmail(dataForm, function () {
        createInfo(dataForm);
    });
};

function sendEmail(dataForm, callback) {
    var params = dataForm;
    const serviceID = "service_qvtmwwm";
    const templateID = "template_dasmzyv";
    emailjs
        .send(serviceID, templateID, params)
        .then(function (res) {
            document.querySelector("#myInputName").value = "";
            document.querySelector("#myInputEmail").value = "";
            document.querySelector("#myInputTelefone").value = "";
            document.querySelector("#myInputime").value = "";
            console.log(res);
            alert("Your message sent successfully");
            if (typeof callback === "function") {
                callback();
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}

// Sử dụng cú pháp đúng của setTimeout()
setTimeout(function () {
    createInfo(dataForm);
}, 2000);

// Post Data form up to API server
function createInfo(data, cb) {
    let option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data),
    };
    fetch(listCustomerAPI, option)
        .then(function (response) {
            response.json;
        })
        .then(cb);
}
