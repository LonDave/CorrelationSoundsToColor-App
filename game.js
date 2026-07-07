
let random;
let livello = 0;
const numbersOFBtn = document.querySelectorAll(".btn").length;
const btn = document.querySelectorAll(".btn");
const btnStart = document.querySelector("#level-title");
const serie = document.querySelector("#serie");

function randomNumber() {
    let min = 1;
    let max = 4;
    random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
}

function audioToRandomNumber() {
    switch (random) {
        case 1:
            let green = new Audio(`sounds/green.mp3`);
            green.play();
            break;
        case 2:
            let red = new Audio(`sounds/red.mp3`);
            red.play();
            break;
        case 3:
            let blue = new Audio(`sounds/blue.mp3`);
            blue.play();
            break;
        case 4:
            let yellow = new Audio(`sounds/yellow.mp3`);
            yellow.play();
            break;
        default:
            console.log("ERRORE");
    }
}

function randomBtn() {
    for (let i = 0; i < numbersOFBtn; i++) {
        btn[i].addEventListener("click", function () {
            if (Number(this.id) === random) {
                livello += 1;
                serie.textContent = "Serie: " + livello;
                setTimeout(function () {
                    randomNumber();
                    audioToRandomNumber();
                }, 1000);
            } else {
                let errore = new Audio(`sounds/wrong.mp3`);
                livello = 0;
                serie.textContent = "Serie:" + livello;
                errore.play();
                setTimeout(function () {
                    randomNumber();
                    audioToRandomNumber();
                }, 1000);
            }
        });
    }
}

btnStart.addEventListener("click", function (e) {
    randomBtn();
    randomNumber();
    audioToRandomNumber();
});
