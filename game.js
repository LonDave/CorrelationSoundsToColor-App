// selezione degli elementi
let random;
let livello = 0;
const numbersOFBtn = document.querySelectorAll(".btn").length;
const btn = document.querySelectorAll(".btn");
const btnStart = document.querySelector("#level-title");
const serie = document.querySelector("#serie");

// creazione numero casuale
function randomNumber() {
    let min = 1;
    let max = 4;
    random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
}

// in base al numero capitato si creano gli audio e li si eseguono tramite lo switch
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

// gestione pulsanti
function randomBtn() {

    // creazione di ciclo per aggiungere gli eventi a butti gli elementi presenti
    for (let i = 0; i < numbersOFBtn; i++) {
        btn[i].addEventListener("click", function () {

            // verifico condizione con this.id che si riferisce agli elementi selezionati con il for
            if (Number(this.id) === random) {
                livello += 1;
                serie.textContent = "Serie: " + livello;

                // tempo di attesa prima di continuare al livello successivo
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

// avvio delle funzioni alla pressione dello start
btnStart.addEventListener("click", function (e) {
    randomBtn();
    randomNumber();
    audioToRandomNumber();
});
