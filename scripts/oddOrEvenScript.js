let helloSubBtn = document.getElementById("helloSubBtn");
let helloReturn = document.getElementById("helloReturn");
let numberInput = document.getElementById("numberInput");

//console.log(nameInput, helloReturn, helloSubBtn);
let savedNumberInput = "";
let sayHelloUrl = "";


helloSubBtn.addEventListener("click", function () {
   helloApi(numberInput)
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

function helloApi(numberInput){
    
        savedNumberInput = numberInput.value;
        sayHelloUrl = "https://aguilarfcorslight.azurewebsites.net/AllForOneAPI/tryNumbers/" + savedNumberInput
        urlCall(sayHelloUrl)
    
}