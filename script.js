var modals = document.getElementsByClassName("modal");
var video = document.getElementsByClassName("video");
var modalOpenBtn = document.getElementsByClassName("modalOpenBtn");
var currentModal = null;
var vid = null;

// Function to open modal by id
function openModal(id) {
  for (i = 0; i < modals.length; i++) {
    if (modals[i].getAttribute('id') == id) {
      currentModal = modals[i];
      vid = video[i];
      currentModal.style.display = "block";
      break;
    }
  }
}

// When the user clicks the button, open modal with the same id
modalOpenBtn.onclick = function() {
  let currentID = modalOpenBtn.getAttribute('id');
  openModal(currentID);
}

// When the user clicks anywhere outside of the modal or the X, close
window.onclick = function(event) {
  if (event.target == currentModal || event.target.getAttribute('class') == 'modalClose') {
    currentModal.style.display = "none";
    vid.pause();
  }
}

function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.hidden = false;
  copyText.select();
  document.execCommand("copy");
  copyText.hidden = true;
  alert("Copied email address to clipboard!");
}



