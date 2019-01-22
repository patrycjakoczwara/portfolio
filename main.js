// nav

$("nav a").on("click", function() {
  const goToSection = "#" + $(this).attr("class");
  $("body, html").animate({
    scrollTop: $(goToSection).offset().top
  });
});

// header

const slideList = [
  {
    img: "header.jpg/blog.jpg",
    text: "Patrycja Koczwara",
    text2: "Front-end Developer"
  },
  {
    img: "header.jpg/aerial.jpg",
    text: "Tworzę bardzo dobre",
    text2: "strony internetowe"
  },
  {
    img: "header.jpg/bibi.jpg",
    text: "Kreatywne rozwiązania",
    text2: "to coś, co zdecydowanie lubię"
  }
];

const image = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
const h2 = document.querySelector("h2.slider");
const dots = [...document.querySelectorAll(".dots span")];
// Interfejs
const time = 3000;
let active = 0;

// Implementacje

const changeDot = () => {
  const activeDot = dots.findIndex(dot => dot.classList.contains("active"));
  dots[activeDot].classList.remove("active");
  dots[active].classList.add("active");
};

const changeSlide = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  h2.textContent = slideList[active].text2;
  changeDot();
};
setInterval(changeSlide, time);

// about me and skills

$(document).on("scroll", function() {
  const windowHeight = $(window).height();
  const scrollValue = $(this).scrollTop();
  const $art = $(".art");
  const artFromTop = $art.offset().top;
  const artHeight = $art.outerHeight();

  if (scrollValue > artFromTop + artHeight - windowHeight) {
    $art.addClass("active");
  }
  const $op1 = $(".op1");
  const $op2 = $(".op2");

  const op1FromTop = $op1.offset().top;
  const op2FromTop = $op2.offset().top;

  const op1Height = $op1.height();
  const op2Height = $op2.height();

  if (scrollValue > op1FromTop + op1Height / 3 - windowHeight) {
    $op1.addClass("active");
  }
  if (scrollValue > op2FromTop + op2Height / 3 - windowHeight) {
    $op2.addClass("active");
  }

  //Czyściciel
  if (scrollValue < 100) {
    $("article").removeClass("active");
  }
});
