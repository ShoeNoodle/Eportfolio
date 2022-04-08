setTimeout(function onReady() {
        loading.style.visibility='hidden';
},500);
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.body.classList.add("stop-scrolling");
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.body.classList.remove("stop-scrolling");
}
function openForm2() {
  document.getElementById("myForm2").style.display = "block";
  document.body.classList.add("stop-scrolling");
}
function closeForm2() {
  document.getElementById("myForm2").style.display = "none";
  document.body.classList.remove("stop-scrolling");
}
function openForm3() {
  document.getElementById("myForm3").style.display = "block";
  document.body.classList.add("stop-scrolling");
}
function closeForm3() {
  document.getElementById("myForm3").style.display = "none";
  document.body.classList.remove("stop-scrolling");
}
function openForm4() {
  document.getElementById("myForm4").style.display = "block";
  document.body.classList.add("stop-scrolling");
}
function closeForm4() {
  document.getElementById("myForm4").style.display = "none";
  document.body.classList.remove("stop-scrolling");
}
function openForm5() {
  document.getElementById("myForm5").style.display = "block";
  document.body.classList.add("stop-scrolling");
}
function closeForm5() {
  document.getElementById("myForm5").style.display = "none";
  document.body.classList.remove("stop-scrolling");
}
function openForm6() {
  document.getElementById("myForm6").style.display = "block";
  document.body.classList.add("stop-scrolling");
}
function closeForm6() {
  document.getElementById("myForm6").style.display = "none";
  document.body.classList.remove("stop-scrolling");
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
