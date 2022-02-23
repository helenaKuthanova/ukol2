function priNajetiMysiZtucni() {
    let odstavec = document.querySelector("#palindrom");
    odstavec.classList.toggle("tucny");
}

/* v html mám v parametru "#palindrom" - jako selektor používám ID */
function odstavecZcervena(selektorOdstavce) {
    let odstavec = document.querySelector(selektorOdstavce);
    odstavec.classList.toggle("cerveny");
}

/* v html mám v parametru "palindrom" - z použití fukce get..ById je jasné, že předávám ID*/

/** Funkce zvětší/zmenší písmo po kliknutí;
* zavináčem definuji parametry (protože JS je netypovaný jazyk, určuji, jaký má být typ parametrů)
* @param {string} idOdstavce
* @param {int} zmenaVelikosti
*/

let velikost = 16
function zvetsPismo(idOdstavce, zmenaVelikosti) {
    let odstavec = document.getElementById(idOdstavce);
    velikost += zmenaVelikosti;
    odstavec.style.fontSize=velikost + "px";
}

function prehrajAudio(idZvuku) {
    let zvuk = document.getElementById(idZvuku);
    zvuk.play();
}

function zastavAudio(idZvuku) {
    let zvuk = document.getElementById(idZvuku);
    zvuk.pause();
}

function hrajOdZacatku(idZvuku) {
    let zvuk = document.getElementById(idZvuku);
    zvuk.currentTime = 0;
    zvuk.play();
}

function nastavHlasitost(idZvuku, hlasitost) {
    let zvuk = document.getElementById(idZvuku);
    zvuk.volume = hlasitost;
}