/*For Smooth Scroll */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

/* Code for Read More Toggle */
const btn = document.getElementById("readMoreBtn");
const moreText = document.getElementById("moreText");

btn.addEventListener("click", () => {
    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        btn.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        btn.textContent = "Read More";
    }
});

/* Code for Active Navbar Link */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".flex-container a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("nav-active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("nav-active");
        }
    });
});
