var scrollHeight=document.documentElement.scrollHeight;

console.log(scrollHeight);

let modalWindow = document.querySelector(".modal");
let closeBtn = document.querySelector(".btn-close");

function closeModal() {
    modalWindow.classList.add("hide");
    modalWindow.classList.remove("show");
}

window.addEventListener("scroll", function() {
    if(pageYOffset > scrollHeight/2) {
        modalWindow.classList.add("show");
        modalWindow.classList.remove("hide");
    }
});

modalWindow.addEventListener("click", function(e) {
    if(e.target == modalWindow) {
        closeModal();
    }
})

closeBtn.addEventListener("click", closeModal);

