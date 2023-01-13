let helloSubBtn = document.getElementById("helloSubBtn");
let helloReturn = document.getElementById("helloReturn");
let numberInput = document.getElementById("numberInput");
let secondNumberInput = document.getElementById("secondNumberInput");

//console.log(nameInput, helloReturn, helloSubBtn);
let savedNumberInput = "";
let savedSecondNumberInput = "";
let sayHelloUrl = "";


helloSubBtn.addEventListener("click", function () {
   helloApi(numberInput, secondNumberInput)
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

function helloApi(numberInput, secondNumberInput){
    
        savedNumberInput = numberInput.value;
        savedSecondNumberInput = secondNumberInput.value;
        sayHelloUrl = "https://aguilarfcorslight.azurewebsites.net/AllForOneAPI/Adding/" + savedNumberInput + "/" + savedSecondNumberInput
        urlCall(sayHelloUrl)
    
}