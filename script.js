// Gallery Lightbox

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.createElement("div");
lightbox.id = "lightbox";

document.body.appendChild(lightbox);

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        const img = document.createElement("img");

        img.src = image.src;

        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }

        lightbox.appendChild(img);

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});
// Mobile Menu

const menu = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Back To Top

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if(document.documentElement.scrollTop > 300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

};

topBtn.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};
