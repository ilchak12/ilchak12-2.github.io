let scrollHeight=document.documentElement.scrollHeight;
let modalWindow = document.querySelector(".modal");
let closeBtn = document.querySelector(".modal .btn-close");

function closeModal() {
    modalWindow.classList.add("hide");
    modalWindow.classList.remove("show");
}

function openModal() {
    modalWindow.classList.add("show");
    modalWindow.classList.remove("hide");
}

function openModalByScroll() {
    if(pageYOffset > scrollHeight/2) {
        openModal();
        window.removeEventListener("scroll", openModalByScroll);
    }
}

window.addEventListener("scroll", openModalByScroll);

modalWindow.addEventListener("click", function(e) {
    if(e.target == modalWindow) {
        closeModal();
    }
})

closeBtn.addEventListener("click", closeModal);

// mobile menu

let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".menu");

mobileMenu.addEventListener("click", function() {
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu");
    } else {
        mainMenu.classList.remove("active-menu");
    }
})

// contact form

let contactBtn = document.querySelector(".contact-btn");
let contactForm = document.querySelector(".contact-form");
let closeBtnForm = document.querySelector(".contact-form .btn-close");
let btnArea = document.querySelector(".btn-area");

contactBtn.addEventListener("click", function() {
    contactForm.classList.add("show");
    contactForm.classList.remove("hide");

    btnArea.classList.add("hide");
    btnArea.classList.remove("show-flex");
})

closeBtnForm.addEventListener("click", function() {
    contactForm.classList.add("hide");
    contactForm.classList.remove("show");

    btnArea.classList.add("show-flex");
    btnArea.classList.remove("hide");
})