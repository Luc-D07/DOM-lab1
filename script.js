//Challenge 1
let buttonContainer = document.querySelector(".button-container");
let total = document.querySelector(".total");
let currentTotal = 0;


//refactor
buttonContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("button")) {
        let amount = Number(event.target.getAttribute("data-amount"));
        console.log(amount);
        currentTotal += amount;
        total.innerText = `Total: $${currentTotal.toFixed(2)}`;
    }
});

let coinForm = document.querySelector(".form");
let coinContainer = document.querySelector(".coin-container")
coinForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(coinForm);
    let amount = data.get("amount")
    let coin = data.get("coin")
    console.log(amount, coin)
    for (let i = 0; i < amount; i++) {
        let coinDiv = document.createElement("div");
        coinDiv.classList.add("coin-div")
        coinDiv.innerText = coin;
        coinContainer.append(coinDiv);
    }
    coinForm.reset();
});

coinContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("coin-div")) {
        event.target.remove();
    }
})

//Light bulb challenge 3

//make variables...why2?
//one directed at the light-bulb class
//another directed at just the bulbs individually
let bulbContainer = document.querySelector(".light-container");
let lightBulb = document.querySelector(".light-bulb");

//use variable made for the container that has the buttons
bulbContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("on")) {
        lightBulb.style.backgroundColor = "yellow";
    } else if (event.target.classList.contains("off")) {
        //make sure to have the correct containers addressed
        lightBulb.style.backgroundColor = "gray";
    } else if (event.target.classList.contains("toggle")) {
        // lightBulb.classList.toggle("light-on") <toggle stopped working after clicking on or off
        if (lightBulb.style.backgroundColor === "gray") {
            lightBulb.style.backgroundColor = "yellow";
        } else {
            lightBulb.style.backgroundColor = "gray";
        }
    } else if (event.target.classList.contains("end")) {
        //which one do I use?

        // the below don't let my buttons work...
        // document.querySelector("on")disabled = true;
        // document.querySelector(".off")disabled = true;
        // document.querySelector("toggle")disabled = true;

        //this code below removes the div and button completely
        // bulbContainer.style.display = "none";

        lightBulb.style.display = "none";
        lightBulb.disabled = true;

        //why doesn't below work when on specific class?
        // document.getElementsByClassName(".on").disabled = true;
    }


})



//maybe this will work to take away div?
// document.getElementById('button').addEventListener('click', changeVisibility(), null);
// function changeVisibility()
// {
//     document.getElementById('divToHide').style.display = "none";
//     document.getElementById('divToShow').style.display = "block";
// }