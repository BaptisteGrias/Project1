
const wilders = document.querySelector(".photoWilders");
wilders.style.position = "absolute";
let position1 = 0;
let direction = -1;

function leftRight() {
    if (position1 == 60) {direction = 1}
    else if (position1 == -20) {direction = -1}

    position1 += -2 * direction;
    wilders.style.top = `${position1}px`;

    requestAnimationFrame(leftRight);
}





const txtAnim = document.querySelector('h2');

new Typewriter(txtAnim, {
    deleteSpeed: 10
})
.changeDelay(40)
.typeString("Bienvenue sur ma fiche !")
.pauseFor(500)
.deleteChars(24)
.typeString("N'hésitez pas à me contactez ")
.pauseFor(500)
.deleteChars(29)
.typeString("Bonne visite 🙂")
.pauseFor(1000)
.deleteChars(15)
.typeString("Baptiste Grias")
.start()