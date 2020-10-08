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
    document.getElementById("success-msg").innerHTML = "Wiadomość została wysłana, postaramy się odpowiedzieć jak najszybciej.";
     let warning = document.getElementById("warning-msg");
     warning.style.display = "none";
    myForm.style.display = "none";
  }).catch(function(response) {
    response.json().then((error) => {
      document.getElementById("warning-msg").innerHTML = "Wiadomość nie została wysłana, sprawdź dane i spróbuj ponownie.";
      for(errorKey in error) {
        myForm.elements[errorKey].classList.add('errorc');
        }
    })
  })
    
  });
