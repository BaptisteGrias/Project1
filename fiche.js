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