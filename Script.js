setTimeout(function onReady() {
        loading.style.visibility='hidden';
},500);
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
function blur()
{
  document.getElementById("Enigma").style.webkitFilter = "blur(4px)";
  document.getElementById("Discord_bot").style.webkitFilter = "blur(4px)";
  document.getElementById("Bank_app").style.webkitFilter = "blur(4px)";
  document.getElementById("Machine_Learn").style.webkitFilter = "blur(4px)";
  document.getElementById("Computer_Vision").style.webkitFilter = "blur(4px)";
  document.getElementById("Wordle").style.webkitFilter = "blur(4px)";
  document.getElementById("Project_heading").style.webkitFilter = "blur(4px)";
  document.getElementById("navigationbar").style.webkitFilter = "blur(4px)";
  document.getElementById("Enigma").style['pointer-events'] = "none";
  document.getElementById("Discord_bot").style['pointer-events']  = "none";
  document.getElementById("Bank_app").style['pointer-events']  = "none";
  document.getElementById("Machine_Learn").style['pointer-events']  = "none";
  document.getElementById("Computer_Vision").style['pointer-events']  = "none";
  document.getElementById("Wordle").style['pointer-events']  = "none";
  document.getElementById("navigationbar").style['pointer-events']  = "none";
}

function unblur(){
  document.getElementById("Enigma").style.webkitFilter = "blur(0px)";
  document.getElementById("Discord_bot").style.webkitFilter = "blur(0px)";
  document.getElementById("Bank_app").style.webkitFilter = "blur(0px)";
  document.getElementById("Machine_Learn").style.webkitFilter = "blur(0px)";
  document.getElementById("Computer_Vision").style.webkitFilter = "blur(0px)";
  document.getElementById("Wordle").style.webkitFilter = "blur(0px)";
  document.getElementById("Project_heading").style.webkitFilter = "blur(0px)";
  document.getElementById("navigationbar").style.webkitFilter = "blur(0px)";
  document.getElementById("Enigma").style['pointer-events'] = "auto";
  document.getElementById("Discord_bot").style['pointer-events'] = "auto";
  document.getElementById("Bank_app").style['pointer-events']= "auto";
  document.getElementById("Machine_Learn").style['pointer-events'] = "auto";
  document.getElementById("Computer_Vision").style['pointer-events'] = "auto";
  document.getElementById("Wordle").style['pointer-events'] = "auto";
  document.getElementById("navigationbar").style['pointer-events'] = "auto";     
}
 document.onclick = function(e){
        if(e.target.id == 'Projects'){
            myForm.style.display = 'none';
            myForm2.style.display = 'none';
            myForm3.style.display = 'none';
            myForm4.style.display = 'none';
            myForm5.style.display = 'none';
            myForm6.style.display = 'none';
            unblur(); 
        }
function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.body.classList.add("stop-scrolling");
  blur();
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.body.classList.remove("stop-scrolling");
  unblur();
}

function openForm2() {
  document.getElementById("myForm2").style.display = "block";
  document.body.classList.add("stop-scrolling");
  blur();
}
function closeForm2() {
  document.getElementById("myForm2").style.display = "none";
  document.body.classList.remove("stop-scrolling");
  unblur();
        
}

function openForm3() {
  document.getElementById("myForm3").style.display = "block";
  document.body.classList.add("stop-scrolling");
  blur();
}

function closeForm3() {
  document.getElementById("myForm3").style.display = "none";
  document.body.classList.remove("stop-scrolling");
  unblur();
}

function openForm4() {
  document.getElementById("myForm4").style.display = "block";
  document.body.classList.add("stop-scrolling");
  blur();
}

function closeForm4() {
  document.getElementById("myForm4").style.display = "none";
  document.body.classList.remove("stop-scrolling");
  unblur();
}
function openForm5() {
  document.getElementById("myForm5").style.display = "block";
  document.body.classList.add("stop-scrolling");
  blur();
        
}
function closeForm5() {
  document.getElementById("myForm5").style.display = "none";
  document.body.classList.remove("stop-scrolling");
  unblur();
}

function openForm6() {
  document.getElementById("myForm6").style.display = "block";
  document.body.classList.add("stop-scrolling");
  blur();
}

function closeForm6() {
  document.getElementById("myForm6").style.display = "none";
  document.body.classList.remove("stop-scrolling");
  unblur();
}
let slideIndex = [1,1,1,1,1,1];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["mySlides","mySlides2","mySlides3","mySlides4","mySlides5","mySlides6"]
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}
