/* =========================================
   REGISTER GSAP
========================================= */

gsap.registerPlugin(ScrollTrigger);


/* =========================================
   PRELOADER
========================================= */

window.addEventListener("load", () => {

    const loader = document.querySelector(".preloader");

    const line = document.querySelector(".loader-line span");


    gsap.to(line, {

        width: "100%",

        duration: 1.2,

        ease: "power2.inOut"

    });


    gsap.to(loader, {

        opacity: 0,

        duration: .8,

        delay: 1.3,

        onComplete: () => {

            loader.style.display = "none";

            startHeroAnimation();

        }

    });

});


/* =========================================
   HERO ANIMATION
========================================= */

function startHeroAnimation() {

    const timeline = gsap.timeline();


    timeline.from(".hero-small", {

        opacity: 0,

        y: 25,

        duration: .8,

        ease: "power3.out"

    });


    timeline.from(".hero h1", {

        opacity: 0,

        y: 60,

        duration: 1.1,

        ease: "power4.out"

    }, "-=.4");


    timeline.from(".hero-content > p", {

        opacity: 0,

        y: 30,

        duration: .8

    }, "-=.6");


    timeline.from(".hero-buttons", {

        opacity: 0,

        y: 25,

        duration: .8

    }, "-=.5");


    timeline.from(".hero-bottom", {

        opacity: 0,

        duration: .8

    }, "-=.3");


    gsap.to(".hero-image", {

        scale: 1,

        duration: 2.5,

        ease: "power2.out"

    });

}


/* =========================================
   NAVBAR
========================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
    document.querySelector(".menu-toggle");

const mobileMenu =
    document.querySelector(".mobile-menu");

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");


menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

    document.body.classList.toggle("no-scroll");

});


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

        document.body.classList.remove("no-scroll");

    });

});


/* =========================================
   SMOOTH ANCHOR SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target =
            document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        const offset = 80;

        const position =
            target.getBoundingClientRect().top +
            window.scrollY -
            offset;

        window.scrollTo({

            top: position,

            behavior: "smooth"

        });

    });

});


/* =========================================
   SCROLL PROGRESS
========================================= */

window.addEventListener("scroll", () => {

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const percentage =
        (scrollTop / documentHeight) * 100;

    document.querySelector(".scroll-progress")
        .style.width = `${percentage}%`;

});


/* =========================================
   GSAP REVEALS
========================================= */

gsap.utils.toArray(".section-label").forEach(element => {

    gsap.from(element, {

        scrollTrigger: {

            trigger: element,

            start: "top 85%",

            once: true

        },

        opacity: 0,

        x: -30,

        duration: .8,

        ease: "power3.out"

    });

});


gsap.utils.toArray(".about-content").forEach(element => {

    gsap.from(element, {

        scrollTrigger: {

            trigger: element,

            start: "top 80%",

            once: true

        },

        opacity: 0,

        x: 60,

        duration: 1,

        ease: "power3.out"

    });

});


gsap.utils.toArray(".about-image").forEach(element => {

    gsap.from(element, {

        scrollTrigger: {

            trigger: element,

            start: "top 80%",

            once: true

        },

        opacity: 0,

        x: -60,

        scale: .95,

        duration: 1.2,

        ease: "power3.out"

    });

});


/* =========================================
   PORTFOLIO REVEAL
========================================= */

gsap.utils.toArray(".portfolio-item").forEach((item, index) => {

    gsap.from(item, {

        scrollTrigger: {

            trigger: item,

            start: "top 90%",

            once: true

        },

        opacity: 0,

        y: 70,

        scale: .96,

        duration: .9,

        delay: index * .04,

        ease: "power3.out"

    });

});


/* =========================================
   VIDEO REVEAL
========================================= */

gsap.utils.toArray(".video-card").forEach((card, index) => {

    gsap.from(card, {

        scrollTrigger: {

            trigger: card,

            start: "top 85%",

            once: true

        },

        opacity: 0,

        y: 70,

        rotateX: 8,

        duration: 1,

        delay: index * .15,

        ease: "power3.out"

    });

});


/* =========================================
   PROCESS ANIMATION
========================================= */

gsap.utils.toArray(".process-item").forEach((item, index) => {

    gsap.from(item, {

        scrollTrigger: {

            trigger: item,

            start: "top 85%",

            once: true

        },

        opacity: 0,

        y: 40,

        duration: .8,

        delay: index * .12,

        ease: "power3.out"

    });

});


/* =========================================
   PACKAGE ANIMATION
========================================= */

gsap.utils.toArray(".package-card").forEach((card, index) => {

    gsap.from(card, {

        scrollTrigger: {

            trigger: card,

            start: "top 85%",

            once: true

        },

        opacity: 0,

        y: 60,

        rotateY: index === 1 ? 0 : 4,

        duration: 1,

        delay: index * .12,

        ease: "power3.out"

    });

});


/* =========================================
   PARALLAX FEATURED IMAGE
========================================= */

gsap.to(".featured-project img", {

    yPercent: 8,

    ease: "none",

    scrollTrigger: {

        trigger: ".featured-project",

        start: "top bottom",

        end: "bottom top",

        scrub: true

    }

});


/* =========================================
   HERO PARALLAX
========================================= */

gsap.to(".hero-image", {

    yPercent: 12,

    ease: "none",

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: true

    }

});


/* =========================================
   COUNTERS
========================================= */

const counters =
    document.querySelectorAll("[data-count]");


counters.forEach(counter => {

    const target =
        Number(counter.dataset.count);


    ScrollTrigger.create({

        trigger: counter,

        start: "top 85%",

        once: true,

        onEnter: () => {

            gsap.to(counter, {

                innerText: target,

                duration: 2,

                snap: {

                    innerText: 1

                },

                ease: "power2.out"

            });

        }

    });

});


/* =========================================
   PORTFOLIO FILTER
========================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const portfolioItems =
    document.querySelectorAll(".portfolio-item");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        const filter =
            button.dataset.filter;


        portfolioItems.forEach(item => {

            const shouldShow =
                filter === "all" ||
                item.classList.contains(filter);


            if (shouldShow) {

                gsap.to(item, {

                    opacity: 1,

                    scale: 1,

                    duration: .45,

                    display: "block",

                    ease: "power2.out"

                });

            } else {

                gsap.to(item, {

                    opacity: 0,

                    scale: .9,

                    duration: .35,

                    display: "none",

                    ease: "power2.in"

                });

            }

        });


        setTimeout(() => {

            ScrollTrigger.refresh();

        }, 500);

    });

});


/* =========================================
   LIGHTBOX
========================================= */

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const closeLightbox =
    document.querySelector(".lightbox-close");

const previousButton =
    document.querySelector(".lightbox-prev");

const nextButton =
    document.querySelector(".lightbox-next");


let currentImageIndex = 0;


const portfolioImages =
    Array.from(
        document.querySelectorAll(".portfolio-image img")
    );


function openLightbox(index) {

    currentImageIndex = index;

    lightboxImage.src =
        portfolioImages[index].src;

    lightbox.classList.add("open");

    document.body.classList.add("no-scroll");

}


portfolioImages.forEach((image, index) => {

    image.parentElement.addEventListener("click", () => {

        openLightbox(index);

    });

});


function closeLightboxFunction() {

    lightbox.classList.remove("open");

    document.body.classList.remove("no-scroll");

}


closeLightbox.addEventListener(
    "click",
    closeLightboxFunction
);


previousButton.addEventListener("click", () => {

    currentImageIndex--;

    if (currentImageIndex < 0) {

        currentImageIndex =
            portfolioImages.length - 1;

    }

    lightboxImage.src =
        portfolioImages[currentImageIndex].src;

});


nextButton.addEventListener("click", () => {

    currentImageIndex++;

    if (
        currentImageIndex >=
        portfolioImages.length
    ) {

        currentImageIndex = 0;

    }

    lightboxImage.src =
        portfolioImages[currentImageIndex].src;

});


lightbox.addEventListener("click", e => {

    if (e.target === lightbox) {

        closeLightboxFunction();

    }

});


/* =========================================
   KEYBOARD LIGHTBOX
========================================= */

document.addEventListener("keydown", e => {

    if (!lightbox.classList.contains("open"))
        return;


    if (e.key === "Escape") {

        closeLightboxFunction();

    }


    if (e.key === "ArrowLeft") {

        previousButton.click();

    }


    if (e.key === "ArrowRight") {

        nextButton.click();

    }

});


/* =========================================
   VIDEO MODAL
========================================= */

const videoModal =
    document.getElementById("videoModal");

const videoPlayer =
    document.getElementById("videoPlayer");

const videoClose =
    document.querySelector(".video-close");

const videoCards =
    document.querySelectorAll(".video-card");


videoCards.forEach(card => {

    card.addEventListener("click", () => {

        const video =
            card.dataset.video;

        videoPlayer.src = video;

        videoModal.classList.add("open");

        document.body.classList.add("no-scroll");

        videoPlayer.play();

    });

});


function closeVideo() {

    videoPlayer.pause();

    videoPlayer.currentTime = 0;

    videoPlayer.src = "";

    videoModal.classList.remove("open");

    document.body.classList.remove("no-scroll");

}


videoClose.addEventListener(
    "click",
    closeVideo
);


videoModal.addEventListener("click", e => {

    if (e.target === videoModal) {

        closeVideo();

    }

});


/* =========================================
   SWIPER TESTIMONIALS
========================================= */

const testimonialSwiper =
    new Swiper(".testimonial-slider", {

        loop: true,

        speed: 800,

        autoplay: {

            delay: 5000,

            disableOnInteraction: false

        },

        navigation: {

            nextEl: ".testimonial-next",

            prevEl: ".testimonial-prev"

        }

    });


/* =========================================
   WHATSAPP FORM
========================================= */

const whatsappForm = document.getElementById("whatsappForm");

whatsappForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const eventType = document.getElementById("eventType").value;
    const eventDate = document.getElementById("eventDate").value;
    const message = document.getElementById("message").value.trim();

    // =====================================
    // YOUR WHATSAPP NUMBER
    // Country code + number
    // Do NOT use +, spaces or -
    // =====================================

    const photographerNumber = "919325102758";


    // Create WhatsApp message

    const whatsappMessage =
`Hello Kartik_Thakare Photography,

I would like to enquire about a photography booking.

Name: ${name}

Phone: ${phone}

Event Type: ${eventType || "Not specified"}

Event Date: ${eventDate || "Not specified"}

Message:
${message || "I would like to know more about your photography packages."}

Thank you.`;


    // Encode message

    const encodedMessage =
        encodeURIComponent(whatsappMessage);


    // WhatsApp URL

    const whatsappURL =
        "https://wa.me/" +
        photographerNumber +
        "?text=" +
        encodedMessage;


    console.log("WhatsApp URL:", whatsappURL);


    // Open WhatsApp

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

});


/* =========================================
   BACK TO TOP
========================================= */

const backTop =
    document.querySelector(".back-top");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================================
   CUSTOM CURSOR
========================================= */

const cursor =
    document.querySelector(".cursor");

const follower =
    document.querySelector(".cursor-follower");


let mouseX = 0;
let mouseY = 0;

let followerX = 0;
let followerY = 0;


document.addEventListener("mousemove", e => {

    mouseX = e.clientX;

    mouseY = e.clientY;


    gsap.to(cursor, {

        x: mouseX,

        y: mouseY,

        duration: .1

    });

});


function animateFollower() {

    followerX +=
        (mouseX - followerX) * .12;

    followerY +=
        (mouseY - followerY) * .12;


    follower.style.left =
        followerX + "px";

    follower.style.top =
        followerY + "px";


    requestAnimationFrame(
        animateFollower
    );

}


animateFollower();


const interactiveElements =
    document.querySelectorAll(
        "a, button, .portfolio-image, .video-card"
    );


interactiveElements.forEach(element => {

    element.addEventListener("mouseenter", () => {

        follower.classList.add("active");

    });


    element.addEventListener("mouseleave", () => {

        follower.classList.remove("active");

    });

});


/* =========================================
   IMAGE REVEAL
========================================= */

gsap.utils.toArray("img").forEach(image => {

    if (
        image.closest(".portfolio-image") ||
        image.closest(".instagram-grid") ||
        image.closest(".video-thumbnail")
    ) {

        gsap.from(image, {

            scrollTrigger: {

                trigger: image,

                start: "top 95%",

                once: true

            },

            opacity: 0,

            scale: 1.08,

            duration: 1.2,

            ease: "power3.out"

        });

    }

});


/* =========================================
   CONTACT FORM INPUT ANIMATION
========================================= */

document.querySelectorAll(
    ".form-group input, .form-group textarea, .form-group select"
).forEach(input => {

    input.addEventListener("focus", () => {

        gsap.to(input, {

            duration: .3,

            x: 3

        });

    });


    input.addEventListener("blur", () => {

        gsap.to(input, {

            duration: .3,

            x: 0

        });

    });

});


/* =========================================
   REFRESH SCROLLTRIGGER
========================================= */

window.addEventListener("resize", () => {

    ScrollTrigger.refresh();

});