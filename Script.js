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
