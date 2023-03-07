const links = document.querySelectorAll("a");

links.forEach((link) => {
    link.addEventListener("mouseover", function () {
        let count = 0;
        const timer = setInterval(function () {
            if (count < 100) {
                count += 1;
                link.style.backgroundColor = `rgba(0, 0, 255, ${
                    count / 100
                })`; /* chuyển màu dần */
            } else {
                clearInterval(timer);
            }
        }, 10);
    });

    link.addEventListener("mouseout", function () {
        link.style.backgroundColor = "#f00"; /* màu nền ban đầu */
    });
});
