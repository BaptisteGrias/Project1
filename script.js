
//Parallax function for the background logo on the desktop version of the homepage
(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.001}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.001}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.002}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();


// WHAT IS IT ?

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





//Text animation on the student name for the mobile version of the fiche pages

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