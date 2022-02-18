function priNajetiMysiZtucni() {
    let odstavec = document.querySelector("p")
    odstavec.classList.toggle("tucny")
}

function odstavecZcervena() {
    let odstavec = document.querySelector("p")
    odstavec.classList.toggle("cerveny")
}

let velikost = 16
function zvetsiPismo() {
    let odstavec = document.querySelector("p");
    velikost++
    odstavec.style.fontSize=velikost + "px"
}