var menu = document.getElementById("menu")
var menu_open = document.getElementById("menu-open")
var menu_close = document.getElementById("menu-close")
var link = document.getElementById("link")
var link2 = document.getElementById("link2")
var link3 = document.getElementById("link3")
var link4 = document.getElementById("link4")
var nav_bar = document.getElementById("nav-bar")


function closemenu(){

    menu.style.top = "-100vh";
    menu_open.style.opacity = "1";
    menu_close.style.top = "-50px"
    menu_close.style.zIndex = "-1"

    link.style.marginLeft = "-1000px";
    link2.style.marginLeft = "-1000px";
    link3.style.marginLeft = "-1000px";
    link4.style.marginLeft = "-1000px";


}

function openmenu(){

    menu.style.top = "0vh";
    menu_open.style.opacity = "0"
    menu_close.style.top = "12px"
    menu_close.style.zIndex = "100"

    link.style.marginLeft = "0";
    link.style.transition = "2s";


    link2.style.marginLeft = "0";
    link2.style.transition = "1.5s";

    link3.style.marginLeft = "0";
    link3.style.transition = "1s";

    link4.style.marginLeft = "0";
    link4.style.transition = ".5s";


}

window.onscroll = function(){
    if(window.pageYOffset >= nav_bar.offsetTop){
        nav_bar.classList.add("sticky");
        nav_bar.classList.add("bg_color");
    }
    else{
        nav_bar.classList.remove("sticky");
        nav_bar.classList.remove("bg_color");
    }
}


/////////Mouse Effect///////////////

let mouseCursor = document.querySelector(".cursor");
let heroimg = document.querySelectorAll('.hero-image1');
let navLinks = document.querySelectorAll('.navLinks');
let cta = document.querySelectorAll('.link-grow0');

window.addEventListener("mousemove", cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove("link-grow1");
    });
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add("link-grow1");
    });
});

heroimg.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove("link-grow");
    });
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add("link-grow");
    });
});
cta.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove("link-grow2");
    });
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add("link-grow2");
    });
});

new Glider(document.querySelector('.glider'), {
    // Mobile-first defaults
    slidesToShow: 1,
    duration: 5,
    dots: '#dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 900,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 1,
          duration: 5
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        }
      }
    ]
});

sal();

/////mousdmove //


//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    
});


const tl = gsap.timeline({default: {ease: "power1.out"} });

tl.to('.text', {y: "0%", duration: 1, stagger: 0.25, delay: 0.3 });
tl.to(".slider", {y: "-100%", duration: 1.5, delay: 0.5});
tl.to(".intro", {y: "-100%", duration: 1}, "-=1.5");
tl.fromTo("nav", {opacity: 0 }, {opacity: 1, duration: 2});
