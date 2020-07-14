$(document).ready(function() {
    var formContent= document.getElementsByClassName('confiFormsFormContent')[0]
    var title = document.getElementById("current-status")
    formContent.insertAdjacentElement('afterbegin',title)
    title.style = "display: flex";
})

// Shows submit button on radio input change
let submitBtn = document.querySelector("button.my-create-dialog-create-button.aui-button.aui-button-primary.save-cf-btn")
    
// submitBtn.style.display = 'unset'

$("input[type='radio']").click(function(){
    modal.style.display = "block";
})

// Get the modal
var modal = document.getElementById("confirmation-modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}