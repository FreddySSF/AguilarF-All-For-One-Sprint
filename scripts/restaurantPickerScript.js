let helloSubBtn = document.getElementById("helloSubBtn");
let helloReturn = document.getElementById("helloReturn");
let nameInput = document.getElementById("nameInput");

//console.log(nameInput, helloReturn, helloSubBtn);
let savedInput = "";
let sayHelloUrl = "";


helloSubBtn.addEventListener("click", function () {
    helloApi(nameInput)
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

function helloApi(nameInput){
    if(nameInput.value){
        savedInput = nameInput.value;
        sayHelloUrl = "https://aguilarfcorslight.azurewebsites.net/AllForOneAPI/myChoice/" + savedInput
        urlCall(sayHelloUrl)
    }
}