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
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
