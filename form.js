const myForm = document.getElementById('contact-form');
  
  myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(myForm);


    function checkStatus (response) {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
      }
      else {
        return Promise.reject(response)
      }
    }

function parseJSON(response) {
  return response.json()
}

fetch('https://api.hr.staging.penhr.pl/api/contact_form_messages', {
      method: 'post',
      body: formData,
})
  .then(checkStatus)
  .then(parseJSON)
  .then(function(data) {
    document.getElementById("success-msg").innerHTML = "WiadomoĹÄ zostaĹa wysĹana. Postaramy siÄ odpowiedzieÄ jak najszybciej.";
     let warning = document.getElementById("warning-msg");
     warning.style.display = "none";
    myForm.style.display = "none";
  }).catch(function(response) {
    response.json().then((error) => {
      document.getElementById("warning-msg").innerHTML = "WiadomoĹÄ nie zostaĹa wysĹana, sprawdĹş dane i sprĂłbuj ponownie.";
      for(errorKey in error) {
        myForm.elements[errorKey].classList.add('errorc');
        }
    })
  })
    
  });