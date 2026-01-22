const alertError = document.getElementById('error');
const loadingAlert = document.getElementById('loading');
const emailsList = emailGenerator();




function emailGenerator(){
    const emails = [];
    for(let i=0; i < 10; i++){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
             .then((response) =>{emails.push(response.data.response)})
             .catch((error) => {
                alertError.innerText = error.message;
                alertError.classList.remove('d-none');
             })
             .finally(() => {
                loadingAlert.classList.add('d-none');
             })
    }
    return emails;
}
