const slideIcon = document.querySelector(".slide-menu");
const slidebar = document.querySelector(".menu-slide");
const slidebarContent = document.querySelectorAll(".slidebar-content");
const secondSlide = document.querySelector(".second-slide");


document.addEventListener("click", (e) => {
    if (slidebar.classList.contains("active")) {
        slidebar.classList.remove("active");
        document.body.style.overflow = "";
    }
})

slideIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    slidebar.classList.add("active");
    if (slidebar.classList.contains("active")) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = '';
    }
        
});

slidebar.addEventListener("click", (e) => {
    e.stopPropagation();
})

secondSlide.addEventListener("click", (e) => {
    e.stopPropagation();
    slidebar.classList.remove("active");
    if (slidebar.classList.contains("active")) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = '';
    }
})



const reveals = document.querySelectorAll(".reveal");

// Prevent browser from restoring previous scroll position on page reload
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    })
}, { thereshold: 0.2 });
reveals.forEach(reveal => observer.observe(reveal));


const button = document.querySelector("button")
button.addEventListener("pointerdown", () => {
        button.classList.add("pressed");
    })

    button.addEventListener("pointerup", () => {
        button.classList.remove("pressed");
    })
    button.addEventListener("pointerleave", () => {
        button.classList.remove("pressed");
    })

    button.addEventListener("pointercancel", () => {
        button.classList.remove("pressed");
    })