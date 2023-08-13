const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const cardContainer = document.querySelector('.cardContainer');


let currentCard = 0;

// ---------------------CardSlider---------------------

const cards = document.querySelectorAll(".card");

cardContainer.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    // Scrolling down
    currentCard++;
    if (currentCard > cards.length - 1) {
      currentCard = 0;
    }
  } else {
    // Scrolling up
    currentCard--;
    if (currentCard < 0) {
      currentCard = cards.length - 1;
    }
  }

  cardContainer.style.transform = `translateX(-${currentCard * 33.33}%)`;
});

// ---------------------cursor---------------------

document.addEventListener('mousemove', function(event) {
  var customCursor = document.querySelector('.cursor');
  customCursor.style.top = event.pageY + 'px';
  customCursor.style.left = event.pageX + 'px';
});

// ---------------------scroll hidden animation---------------------

const observerHidden = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
      if(entry.isIntersecting){
          entry.target.classList.add("show");

      } else if (!entry.isIntersecting) {
          entry.target.classList.remove("show");
      }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => observerHidden.observe(el));

// ---------------------scroll slider animation---------------------
let startScrollPos = window.scrollY;
const allTriangles = document.querySelectorAll('.triangle');
const cardSlider = document.querySelector('.cardSlider');

document.addEventListener('scroll', function(e) {
  const currentScrollPos = window.scrollY;
  console.log(window.scrollY);
  allTriangles.forEach(function(triangle) {
    if (currentScrollPos > startScrollPos && window.scrollY >= 300 && !isMouseInCardSection()) {
      triangle.classList.add("triangleSlideDown");
      triangle.classList.remove('triangleSlideUp');
      console.log("Scrolling down...");
    } else if (currentScrollPos < startScrollPos && window.scrollY <= 500) {
      triangle.classList.add("triangleSlideUp");
      triangle.classList.remove('triangleSlideDown');
      console.log("Scrolling up...");
    }
  });
  startScrollPos = currentScrollPos;
});

function isMouseInCardSection() {
  const cardRect = cardSlider.getBoundingClientRect();
  const mouseY = event.clientY;
  
  return mouseY >= cardRect.top && mouseY <= cardRect.bottom;
}


// ---------------------clap open letter animation---------------------
const logoText = document.querySelector(".h1Logo");
const textLetters = logoText.querySelectorAll("span");

textLetters.forEach((letter, index) => {
  const delay = index * 100;
  letter.style.animationDelay = `${delay}ms`;
});

