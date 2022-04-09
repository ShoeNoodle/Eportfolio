setTimeout(function onReady() {
        loading.style.visibility='hidden';
},500);
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.body.classList.add("stop-scrolling");
  document.getElementById("Project").style.webkitFilter = "blur(4px)";
  document.getElementById("navbar").style.webkitFilter = "blur(4px)";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.body.classList.remove("stop-scrolling");
  document.getElementById("Project").style.webkitFilter = "blur(0px)";
  document.getElementById("navbar").style.webkitFilter = "blur(0px)";
}
function openForm2() {
  document.getElementById("myForm2").style.display = "block";
  document.body.classList.add("stop-scrolling");
  document.getElementById("Project").style.webkitFilter = "blur(4px)";
  document.getElementById("navbar").style.webkitFilter = "blur(4px)";
}
function closeForm2() {
  document.getElementById("myForm2").style.display = "none";
  document.body.classList.remove("stop-scrolling");
  document.getElementById("Project").style.webkitFilter = "blur(0px)";
  document.getElementById("navbar").style.webkitFilter = "blur(0px)";
}
function openForm3() {
  document.getElementById("myForm3").style.display = "block";
  document.body.classList.add("stop-scrolling");
  document.getElementById("Project").style.webkitFilter = "blur(4px)";
  document.getElementById("navbar").style.webkitFilter = "blur(4px)";
}
function closeForm3() {
  document.getElementById("myForm3").style.display = "none";
  document.body.classList.remove("stop-scrolling");
  document.getElementById("Project").style.webkitFilter = "blur(0px)";
  document.getElementById("navbar").style.webkitFilter = "blur(0px)";
}
function openForm4() {
  document.getElementById("myForm4").style.display = "block";
  document.body.classList.add("stop-scrolling");
  document.getElementById("Project").style.webkitFilter = "blur(4px)";
  document.getElementById("navbar").style.webkitFilter = "blur(4px)";
}
function closeForm4() {
  document.getElementById("myForm4").style.display = "none";
  document.body.classList.remove("stop-scrolling");
  document.getElementById("Project").style.webkitFilter = "blur(0px)";
  document.getElementById("navbar").style.webkitFilter = "blur(0px)";
}
function openForm5() {
  document.getElementById("myForm5").style.display = "block";
  document.body.classList.add("stop-scrolling");
  document.getElementById("Project").style.webkitFilter = "blur(4px)";
  document.getElementById("navbar").style.webkitFilter = "blur(4px)";
}
function closeForm5() {
  document.getElementById("myForm5").style.display = "none";
  document.body.classList.remove("stop-scrolling");
  document.getElementById("Project").style.webkitFilter = "blur(0px)";
  document.getElementById("navbar").style.webkitFilter = "blur(0px)";
}
function openForm6() {
  document.getElementById("myForm6").style.display = "block";
  document.body.classList.add("stop-scrolling");
 document.getElementById("Project").style.webkitFilter = "blur(4px)";
  document.getElementById("navbar").style.webkitFilter = "blur(4px)";
}
function closeForm6() {
  document.getElementById("myForm6").style.display = "none";
  document.body.classList.remove("stop-scrolling");
  document.getElementById("Project").style.webkitFilter = "blur(0px)";
  document.getElementById("navbar").style.webkitFilter = "blur(0px)";
}
let slideIndex = [1,1,1,1,1,1];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["mySlides","mySlides2","mySlides3","mySlides4","mySlides5","mySlides6"]
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}
