$(document).ready(function() {
    var formContent= document.getElementsByClassName('confiFormsFormContent')[0]
    var title = document.getElementById("current-status")
    formContent.insertAdjacentElement('afterbegin',title)
    title.style = "display: flex";

    //Move form submit button inside modal
    let modalContent = document.getElementById("confirmation-modal-content")
    let submitBtn = document.querySelector("button.my-create-dialog-create-button.aui-button.aui-button-primary.save-cf-btn")
    modalContent.insertAdjacentElement('beforeend',submitBtn)
    submitBtn.style.display = 'unset'

})


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


//Set buttons to display
let review = document.querySelector("label[for=i_statusRef-review]")
let approve = document.querySelector("label[for=i_statusRef-approved]")
let publish = document.querySelector("label[for=i_statusRef-published]")
let reject = document.querySelector("label[for=i_statusRef-rejected]")

if(currentStatus === 'approved'){
  statusColor.style.color = "#1c948d";
  review.innerHTML = "Unpublish"
  publish.style.display = "unset"
  review.style.display = "unset"	
}

else if(currentStatus === 'rejected'){
  statusColor.style.color = "#ff4947";
  review.style.display = "unset"
  approve.style.display = "unset"
}
else if(currentStatus === 'published'){
  statusColor.style.color = "#1c948d";
  review.innerHTML = "unpublish"
  review.style.display = "unset"
}
else if(currentStatus === 'review'){
  statusColor.style.color = "#1c948d";
  approve.style.display = "unset"
  reject.style.display = "unset"
}
else{
  statusColor.style.color = "#4e5868";
}