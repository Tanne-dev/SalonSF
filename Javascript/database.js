// Change the color of nav-item when u mouseover
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
