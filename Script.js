setTimeout(function onReady() {
        loading.style.visibility='hidden';
},500);
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
function showDiv() {
        document.getElementById('Enigmadiv').style.display = "block"
        dismissible: true,
        opacity= 3, 
        in_duration= 300, 
        out_duration= 200;
          }
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
