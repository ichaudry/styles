$( document ).ready(function() {
    var formContent= document.getElementsByClassName('confiFormsFormContent')[0]
    var title = document.getElementById("current-status")
    formContent.insertAdjacentElement('afterbegin',title)
    title.style = "display: flex"

    //Get current status
	let currentStatus;
	$.get(`/ajax/confiforms/rest/filter.action?pageId=30541161&f=bLabsRegister&q=id:${formId}`, function(data, status){
    currentStatus = data.list.entry[0].fields.status
    let statusDiv = document.getElementById('current-status');
    statusDiv.insertAdjacentHTML('beforeend', `<div id="current-status-color">${currentStatus}</div>`);   
  })

  alert(`<div id="current-status-color">${currentStatus}</div>`)
})