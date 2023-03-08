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
let subList = document.querySelector(".nav-sub-list");
let subItems = subList.querySelectorAll(".nav-sub-item");

subItems.forEach(function (subItem) {
    subItem.addEventListener("mouseover", function () {
        subItem.style.backgroundColor = "white";
    });

    subItem.addEventListener("mouseleave", function () {
        subItem.style.backgroundColor = "#2a577dbe";
    });
});
