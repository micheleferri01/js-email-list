const alertError = document.getElementById('error');
const loadingAlert = document.getElementById('loading');
const emailsContainer = document.getElementById('emails-list');
const newListButton = document.getElementById('new-email-list');

for (let i = 0; i < 10; i++){
    emailGenerator();
}

emailsContainer.classList.remove('d-none');

newListButton.addEventListener('click', () => {
    emailsContainer.classList.add('d-none');
    emailsContainer.innerHTML = "";
    loadingAlert.classList.remove('d-none');
    for (let i = 0; i < 10; i++) {
        emailGenerator();
    }
    emailsContainer.classList.remove('d-none');
})

function emailGenerator(){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) => { 
                const mail = response.data.response;
                emailsContainer.innerHTML += `<a class="list-group-item list-group-item-action" href = 'mailto: ${mail}'>${mail}</a>`})
             .catch((error) => {
                alertError.innerText = error.message;
                alertError.classList.remove('d-none');
             })
             .finally(() => {
                loadingAlert.classList.add('d-none');
             })
}
