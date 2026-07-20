/* ==========================================
   JAI BABA GANGADAS MANDIR
   PREMIUM SCRIPT
========================================== */


/* ===========================
   MOBILE MENU
=========================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

}


/* ===========================
   CLOSE MENU AFTER CLICK
=========================== */

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

});

});


/* ===========================
   HERO SLIDER
=========================== */

const slides=document.querySelectorAll(".slide");

let currentSlide=0;

function changeSlide(){

slides.forEach(slide=>{

slide.classList.remove("active");

});

currentSlide++;

if(currentSlide>=slides.length){

currentSlide=0;

}

slides[currentSlide].classList.add("active");

}

if(slides.length>0){

setInterval(changeSlide,4000);

}


/* ===========================
   GALLERY LIGHTBOX
=========================== */

const galleryImages=document.querySelectorAll(".gallery-item img");

const lightbox=document.createElement("div");

lightbox.id="lightbox";

document.body.appendChild(lightbox);

galleryImages.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.classList.add("active");

const img=document.createElement("img");

img.src=image.src;

while(lightbox.firstChild){

lightbox.removeChild(lightbox.firstChild);

}

lightbox.appendChild(img);

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("active");

});


/* ===========================
   BACK TO TOP
=========================== */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

if(topBtn){

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

}


/* ===========================
   STICKY NAVBAR
=========================== */

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});


/* ===========================
   SCROLL ANIMATION
=========================== */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

document.querySelectorAll(

".section,.info-card,.event-card,.gallery-item,.mahant-card,.contact-card,.aarti-box"

).forEach(el=>{

el.classList.add("fade-up");

observer.observe(el);

});


/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/* ===========================
   LOADER EFFECT
=========================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


/* ===========================
   CONSOLE MESSAGE
=========================== */

console.log("🛕 Jai Baba Gangadas Mandir Website Loaded Successfully");
