const alertError = document.getElementById('error');
const loadingAlert = document.getElementById('loading');
const emailsContainer = document.getElementById('emails-list');
let email = emailsContainer.innerHTML;

for (let i = 0; i < 10; i++){
    emailGenerator();
}

function emailGenerator(){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) => { emailsContainer.innerHTML += `<li>${response.data.response}</li>`})
             .catch((error) => {
                alertError.innerText = error.message;
                alertError.classList.remove('d-none');
             })
             .finally(() => {
                loadingAlert.classList.add('d-none');
             })
}
