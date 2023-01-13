let helloSubBtn = document.getElementById("helloSubBtn");
let helloReturn = document.getElementById("helloReturn");
let nameInput = document.getElementById("nameInput");
let costumeInput = document.getElementById("costumeInput");

//console.log(nameInput, helloReturn, helloSubBtn);
let savedInput = "";
let savedCostumeInput = "";
let sayHelloUrl = "";


helloSubBtn.addEventListener("click", function () {
   helloApi(nameInput, costumeInput)
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            helloReturn.textContent = data
            console.log(data)
        }
    )
}

function helloApi(nameInput, costumeInput){
    
        savedInput = nameInput.value;
        savedCostumeInput = costumeInput.value;
        sayHelloUrl = "https://aguilarfcorslight.azurewebsites.net/AllForOneAPI/AskQuestions/" + savedInput + "/" + savedCostumeInput
        urlCall(sayHelloUrl)
    
}