let helloSubBtn = document.getElementById("helloSubBtn");
let infoReturn = document.getElementById("infoReturn");
let lastReturn = document.getElementById("lastReturn");
let slackReturn = document.getElementById("slackReturn");
let emailReturn = document.getElementById("emailReturn");
let hobbiesReturn = document.getElementById("hobbiesReturn");
let nameInput = document.getElementById("nameInput");


//console.log(nameInput, helloReturn, helloSubBtn);
let savedNameInput = "";
let sayHelloUrl = "";


helloSubBtn.addEventListener("click", function () {
    helloApi(nameInput)
})

function urlCall(url) {
    fetch(url).then(
        response => response.json()
    ).then(
        data => {
            infoReturn.textContent = "First Name: " + data.firstName;
            lastReturn.textContent = "Last Name: " + data.lastName;
            slackReturn.textContent = "Slack Name: " + data.slackName;
            emailReturn.textContent = "Email: " + data.email;
            hobbiesReturn.textContent = "Hobbies: " + data.hobbies;
            console.log(data.firstName)
        }
    )
}

function helloApi(nameInput) {

    savedNameInput = nameInput.value;
    sayHelloUrl = "https://aguilarfcorslight.azurewebsites.net/AllForOneAPI/studentLookUp/" + savedNameInput
    urlCall(sayHelloUrl)

}