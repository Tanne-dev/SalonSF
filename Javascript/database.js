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
const waypoints = document.querySelectorAll(".waypoint");
console.log(prevScrollPos);

window.onscroll = function () {
    let topPos = window.pageYOffset;
    console.log(topPos);
    var imgBlogElement = document.querySelector(".blog-img img");
    var img2BlogElement = document.querySelector(".blog-img2 img");
    var BlogContent = document.querySelector(".blog-content");
    var BlogContent2 = document.querySelector(".blog-item2 .blog-content");
    var serviceHeadTitle = document.querySelector(".service_head");

    var serviceItem1 = document.querySelector("#service_item_ct:first-child");

    var serviceItem2 = document.querySelector("#service_item_ct:nth-child(2)");
    var serviceItem3 = document.querySelector("#service_item_ct:nth-child(3)");
    var serviceItem4 = document.querySelector("#service_item_ct:nth-child(4)");
    var serviceItem5 = document.querySelector("#service_item_ct:last-child");

    function paralaxScroll() {
        if (topPos >= 200) {
            imgBlogElement.style.animation = "slideLeft linear 1.5s";
            imgBlogElement.style.display = "block";
            BlogContent.style.animation = " slideBot linear 1.5s";
        }
        if (topPos >= 600) {
            img2BlogElement.style.animation = "slideRight linear 1.5s";
            img2BlogElement.style.display = "block";
            BlogContent2.style.animation = " slideTop linear 1.5s";
        }
        if (topPos >= 900) {
            serviceHeadTitle.style.animation = "fadeOut linear 2s";
        }
        if (topPos >= 1100) {
            serviceItem1.style.animation = "slideLeft linear 1.5s";
        }
        if (topPos >= 1600) {
            serviceItem2.style.animation = "slideRight linear 1.5s";
        }
        if (topPos >= 2100) {
            serviceItem3.style.animation = "slideLeft linear 1.5s";
        }
        if (topPos >= 2600) {
            serviceItem4.style.animation = "slideRight linear 1.5s";
        }
        if (topPos >= 3100) {
            serviceItem5.style.animation = "slideLeft linear 1.5s";
        } else {
            imgBlogElement.style.removeProperty("animation");
            img2BlogElement.style.removeProperty("animation");
            BlogContent.style.removeProperty("animation");
            img2BlogElement.style.removeProperty("animation");
            img2BlogElement.style.removeProperty("animation");
            BlogContent2.style.removeProperty("animation");
            serviceHeadTitle.style.removeProperty("animation");
            serviceItem1.style.removeProperty("animation");
            serviceItem2.style.removeProperty("animation");
            serviceItem3.style.removeProperty("animation");
            serviceItem4.style.removeProperty("animation");
            serviceItem5.style.removeProperty("animation");
        }
    }
    paralaxScroll();
    if (prevScrollPos < topPos) {
        headerElement.classList.remove("scroll-hidden");
        headerElement.classList.add("active-filter");
    } else {
        headerElement.classList.add("scroll-hidden");
        headerElement.classList.remove("active-filter");
    }
    prevScrollPos = topPos;
    if (topPos == 0) {
        headerElement.classList.remove("scroll-hidden");
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
// const itemsServiceElement = document.querySelectorAll(".service_item");
// const itemsContainer = document.querySelector(".service_container");

// // itemsServiceElement.forEach(function (item) {
// //     item.addEventListener("click", function () {
// //         const contentId = item.getAttribute("data-content");
// //         let serviceBlockElement = document.getElementById("service_block");
// //         const content = document.getElementById(contentId);
// //         const containerElement =
// //             serviceBlockElement.querySelector(".service_container");
// //         containerElement.style.opacity = "1";
// //         containerElement.style.height = "450px";
// //         itemsContainer.innerHTML = content.innerHTML;
// //     });
// // });
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
    setTimeout(slideShow, 5000);
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
// Open signup page active overlay
let signUpElement = document.querySelector(".btn-booking");
const overlayElemnt = document.querySelector(".sign-up_overlay");
const signuppageElement = document.getElementById("sign-up-Page");
signUpElement.addEventListener("click", function () {
    overlayElemnt.style.display = "block";
    signuppageElement.style.display = "block";
    signuppageElement.style.animation = "fadeOut linear 0.5s";
});
// Close booking page
let btnClose = document.querySelector(".btn-close-container");
btnClose.addEventListener("click", function () {
    overlayElemnt.style.display = "none";
    signuppageElement.style.display = "none";
});
let listCustomerAPI = "http://localhost:3000/customers";
// Get API data
function start() {
    // getInfo();
}
start();
//  Connect website to API data
// function getInfo(cb) {
//     fetch(listCustomerAPI)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(cb);
// }
//  Listen event data click and render
let bookingBTN = document.querySelector(".booking-cta .btn");
bookingBTN.onclick = function () {
    let name = document.querySelector("#fullname").value;
    let email = document.querySelector("#email").value;
    let telefone = document.querySelector("#telefone").value;
    let bookingtime = document.querySelector("#time").value;
    if (name === "" || email === "" || telefone === "" || bookingtime === "") {
        alert(" Please do not leave empty information..");
        return;
    }

    var dataForm = {
        name: name,
        email: email,
        telefone: telefone,
        bookingtime: bookingtime,
    };
    sendEmail(dataForm);
};
const dataForm = {
    name: document.querySelector("#fullname").value,
    email: document.querySelector("#email").value,
    phone: document.querySelector("#telefone").value,
    message: document.querySelector("#time").value,
};

function sendEmail(dataForm, callback) {
    var params = dataForm;
    const serviceID = "service_qvtmwwm";
    const templateID = "template_dasmzyv";
    emailjs
        .send(serviceID, templateID, params)
        .then(function (res) {
            document.querySelector("#fullname").value = "";
            document.querySelector("#email").value = "";
            document.querySelector("#telefone").value = "";
            document.querySelector("#time").value = "";
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

// Post Data form up to API server
// function createInfo(data, cb) {
//     let option = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: JSON.stringify(data),
//     };
//     fetch(listCustomerAPI, option)
//         .then(function (response) {
//             response.json;
//         })
//         .then(cb);
// }
// Scroll window and show element slow
// window.addEventListener("scroll", function () {
//     const currentScrollPos = window.pageXOffset;
//     console.log(currentScrollPos);
// });
