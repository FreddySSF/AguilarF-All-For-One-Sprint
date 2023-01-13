let helloSubBtn = document.getElementById("helloSubBtn");
let helloReturn = document.getElementById("helloReturn");
let nameInput = document.getElementById("nameInput");
let friendNameInput = document.getElementById("friendNameInput");
let placeInput = document.getElementById("placeInput");
let adjectiveInput = document.getElementById("adjectiveInput");
let superHeroOneInput = document.getElementById("superHeroOneInput");
let superHeroTwoInput = document.getElementById("superHeroTwoInput");
let villainInput = document.getElementById("villainInput");
let superPowerOneInput = document.getElementById("superPowerOneInput");
let superPowerTwoInput = document.getElementById("superPowerTwoInput");
let amusementParkInput = document.getElementById("amusementParkInput")

//console.log(nameInput, helloReturn, helloSubBtn);
let savedNameInput = "";
let savedFriendNameInput = "";
let savedPlaceInput = "";
let savedAdjectiveInput = "";
let savedSuperHeroOneInput = "";
let savedSuperHeroTwoInput = "";
let savedVillainInput = "";
let savedSuperPowerOneInput = "";
let savedSuperPowerTwoInput = "";
let savedAmusementParkInput = "";
let sayHelloUrl = "";


helloSubBtn.addEventListener("click", function () {
    helloApi(nameInput, friendNameInput, placeInput, adjectiveInput, superHeroOneInput, superHeroTwoInput, villainInput, superPowerOneInput, superPowerTwoInput, amusementParkInput)
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

function helloApi(nameInput, friendNameInput, placeInput, adjectiveInput, superHeroOneInput, superHeroTwoInput, villainInput, superPowerOneInput, superPowerTwoInput, amusementParkInput) {

    savedNameInput = nameInput.value;
    savedFriendNameInput = friendNameInput.value;
    savedPlaceInput = placeInput.value;
    savedAdjectiveInput = adjectiveInput.value;
    savedSuperHeroOneInput = superHeroOneInput.value;
    savedSuperHeroTwoInput = superHeroTwoInput.value;
    savedVillainInput = villainInput.value;
    savedSuperPowerOneInput = superPowerOneInput.value;
    savedSuperPowerTwoInput = superPowerTwoInput.value;
    savedAmusementParkInput = amusementParkInput.value;
    sayHelloUrl = "https://aguilarfcorslight.azurewebsites.net/AllForOneAPI/userInput/" + savedNameInput + "/" + savedFriendNameInput + "/" + savedPlaceInput + "/" + savedAdjectiveInput + "/" + savedSuperHeroOneInput + "/" + savedSuperHeroTwoInput + "/" + savedVillainInput + "/" + savedSuperPowerOneInput + "/" + savedSuperPowerTwoInput + "/" + savedAmusementParkInput
    urlCall(sayHelloUrl)

}