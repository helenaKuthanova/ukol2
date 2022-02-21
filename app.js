function priNajetiMysiZtucni() {
    let odstavec = document.querySelector("#palindrom");
    odstavec.classList.toggle("tucny");
}

function odstavecZcervena() {
    let odstavec = document.querySelector("#palindrom");
    odstavec.classList.toggle("cerveny");
}

let velikost = 16
function zvetsPismo() {
    let odstavec = document.querySelector("#palindrom");
    velikost++;
    odstavec.style.fontSize=velikost + "px";
}

function prehrajAudio() {
    let zvuk = document.getElementById("zvukovaStopa");
    zvuk.play();
}

function zastavAudio() {
    let zvuk = document.getElementById("zvukovaStopa");
    zvuk.pause();
}

function hrajOdZacatku() {
    let zvuk = document.getElementById("zvukovaStopa");
    zvuk.currentTime = 0;
    zvuk.play();
}

function nastavHlasitost(hlasitost) {
    let zvuk = document.getElementById("zvukovaStopa");
    zvuk.volume = hlasitost;
}