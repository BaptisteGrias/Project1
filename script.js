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


/* scroll to top script-------------------------------------------------------------*/

function scrollToTop() {
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
}


/* dark mode-------------------------------------------------------------*/


function functionDarkmode() {
    const element = document.body;
    element.classList.toggle("dark-mode");
} 



const myText = document.getElementsByClassName("input-selector");
for (let i=0 ; i < myText.length ; i++){
  myText[i].addEventListener('click' , () => {
    myText[i].style.backgroundColor = "white"; 
    myText[i].style.fontSize = "16px"; 
    myText[i].style.fontFamily = "Roboto"; 
    myText[i].style.fontWeight = "bold";
  })
};


const myMsg = document.getElementById("message-form");
myMsg.addEventListener('click' , () => {
    myMsg.style.backgroundColor = "white"; 
    myMsg.style.fontFamily = "Roboto";
    myMsg.style.fontSize = "16px";
    myMsg.style.fontWeight = "bold";
    })



const userName = document.querySelector("#name");
const form = document.querySelector(".contact-form");


form.onsubmit = function(event) {
  event.preventDefault();
  alert(`Merci ${userName.value} de nous avoir contacté!`);
}

//Text animation on the student name for the mobile version of the fiche pages

const txtAnim = document.querySelector('.baptiste');

new Typewriter(txtAnim, {
    deleteSpeed: 10
})
.changeDelay(40)
.typeString("Bienvenue sur ma fiche !")
.pauseFor(500)
.deleteChars(24)
.typeString("N'hésitez pas à me contacter ")
.pauseFor(500)
.deleteChars(29)
.typeString("Bonne visite 🙂")
.pauseFor(1000)
.deleteChars(15)
.typeString("Baptiste Grias")
.start();

// animation aline
const txtAnim1 = document.querySelector('.aline');

new Typewriter(txtAnim1, {
    deleteSpeed: 10
})
.changeDelay(40)
.typeString("Bienvenue sur ma fiche !")
.pauseFor(500)
.deleteChars(24)
.typeString("N'hésitez pas à me contacter ")
.pauseFor(500)
.deleteChars(29)
.typeString("Bonne visite 🙂")
.pauseFor(1000)
.deleteChars(15)
.typeString("Aline Dubois")
.start();


// animation sophie
const txtAnim2 = document.querySelector('.sophie');

new Typewriter(txtAnim2, {
    deleteSpeed: 10
})
.changeDelay(40)
.typeString("Bienvenue sur ma fiche !")
.pauseFor(500)
.deleteChars(24)
.typeString("N'hésitez pas à me contacter ")
.pauseFor(500)
.deleteChars(29)
.typeString("Bonne visite 🙂")
.pauseFor(1000)
.deleteChars(15)
.typeString("Sophie Topart")
.start();



// animation david
const txtAnim3 = document.querySelector('.david');

new Typewriter(txtAnim3, {
    deleteSpeed: 10
})
.changeDelay(40)
.typeString("Bienvenue sur ma fiche !")
.pauseFor(500)
.deleteChars(24)
.typeString("N'hésitez pas à me contacter ")
.pauseFor(500)
.deleteChars(29)
.typeString("Bonne visite 🙂")
.pauseFor(1000)
.deleteChars(15)
.typeString("David D'Amato")
.start();


// animation edouard
const txtAnim4 = document.querySelector('.edouard');

new Typewriter(txtAnim4, {
    deleteSpeed: 10
})
.changeDelay(40)
.typeString("Bienvenue sur ma fiche !")
.pauseFor(500)
.deleteChars(24)
.typeString("N'hésitez pas à me contacter ")
.pauseFor(500)
.deleteChars(29)
.typeString("Bonne visite 🙂")
.pauseFor(1000)
.deleteChars(15)
.typeString("Edouard Larroche")
.start();

// animation gregory
const txtAnim5 = document.querySelector('.gregory');

new Typewriter(txtAnim5, {
    deleteSpeed: 10
})
.changeDelay(40)
.typeString("Bienvenue sur ma fiche !")
.pauseFor(500)
.deleteChars(24)
.typeString("N'hésitez pas à me contacter ")
.pauseFor(500)
.deleteChars(29)
.typeString("Bonne visite 🙂")
.pauseFor(1000)
.deleteChars(15)
.typeString("Gregory Bouteville")
.start();


// animation jerome
const txtAnim6 = document.querySelector('.jerome');

new Typewriter(txtAnim6, {
    deleteSpeed: 10
})
.changeDelay(40)
.typeString("Bienvenue sur ma fiche !")
.pauseFor(500)
.deleteChars(24)
.typeString("N'hésitez pas à me contacter ")
.pauseFor(500)
.deleteChars(29)
.typeString("Bonne visite 🙂")
.pauseFor(1000)
.deleteChars(15)
.typeString("Jérôme Shaaban")
.start();


// animation julienb
const txtAnim7 = document.querySelector('.julienb');

new Typewriter(txtAnim7, {
    deleteSpeed: 10
})
.changeDelay(40)
.typeString("Bienvenue sur ma fiche !")
.pauseFor(500)
.deleteChars(24)
.typeString("N'hésitez pas à me contacter ")
.pauseFor(500)
.deleteChars(29)
.typeString("Bonne visite 🙂")
.pauseFor(1000)
.deleteChars(15)
.typeString("Julien Bourgineau")
.start();


// animation julienN
const txtAnim8 = document.querySelector('.julienN');

new Typewriter(txtAnim8, {
    deleteSpeed: 10
})
.changeDelay(40)
.typeString("Bienvenue sur ma fiche !")
.pauseFor(500)
.deleteChars(24)
.typeString("N'hésitez pas à me contacter ")
.pauseFor(500)
.deleteChars(29)
.typeString("Bonne visite 🙂")
.pauseFor(1000)
.deleteChars(15)
.typeString("Julien Nicolas")
.start();

// animation kevin
const txtAnim9 = document.querySelector('.kevin');

new Typewriter(txtAnim9, {
    deleteSpeed: 10
})
.changeDelay(40)
.typeString("Bienvenue sur ma fiche !")
.pauseFor(500)
.deleteChars(24)
.typeString("N'hésitez pas à me contacter ")
.pauseFor(500)
.deleteChars(29)
.typeString("Bonne visite 🙂")
.pauseFor(1000)
.deleteChars(15)
.typeString("Kevin Touyard")
.start();

// animation manon
const txtAnim10 = document.querySelector('.manon');

new Typewriter(txtAnim10, {
    deleteSpeed: 10
})
.changeDelay(40)
.typeString("Bienvenue sur ma fiche !")
.pauseFor(500)
.deleteChars(24)
.typeString("N'hésitez pas à me contacter ")
.pauseFor(500)
.deleteChars(29)
.typeString("Bonne visite 🙂")
.pauseFor(1000)
.deleteChars(15)
.typeString("Manon Josse")
.start();

// animation marie-anne
const txtAnim11 = document.querySelector('.marie');

new Typewriter(txtAnim11, {
    deleteSpeed: 10
})
.changeDelay(40)
.typeString("Bienvenue sur ma fiche !")
.pauseFor(500)
.deleteChars(24)
.typeString("N'hésitez pas à me contacter ")
.pauseFor(500)
.deleteChars(29)
.typeString("Bonne visite 🙂")
.pauseFor(1000)
.deleteChars(15)
.typeString("Marie-Anne Duvieu")
.start();

// animation milad
const txtAnim12 = document.querySelector('.milad');

new Typewriter(txtAnim12, {
    deleteSpeed: 10
})
.changeDelay(40)
.typeString("Bienvenue sur ma fiche !")
.pauseFor(500)
.deleteChars(24)
.typeString("N'hésitez pas à me contacter ")
.pauseFor(500)
.deleteChars(29)
.typeString("Bonne visite 🙂")
.pauseFor(1000)
.deleteChars(15)
.typeString("Milad Behzadi")
.start();


// animation pauline
const txtAnim13 = document.querySelector('.pauline');

new Typewriter(txtAnim13, {
    deleteSpeed: 10
})
.changeDelay(40)
.typeString("Bienvenue sur ma fiche !")
.pauseFor(500)
.deleteChars(24)
.typeString("N'hésitez pas à me contacter ")
.pauseFor(500)
.deleteChars(29)
.typeString("Bonne visite 🙂")
.pauseFor(1000)
.deleteChars(15)
.typeString("Pauline Labbé")
.start();


// animation pierre
const txtAnim14 = document.querySelector('.pierre');

new Typewriter(txtAnim14, {
    deleteSpeed: 10
})
.changeDelay(40)
.typeString("Bienvenue sur ma fiche !")
.pauseFor(500)
.deleteChars(24)
.typeString("N'hésitez pas à me contacter ")
.pauseFor(500)
.deleteChars(29)
.typeString("Bonne visite 🙂")
.pauseFor(1000)
.deleteChars(15)
.typeString("Pierre Houot")
.start();


// animation sarah
const txtAnim15 = document.querySelector('.sarah');

new Typewriter(txtAnim15, {
    deleteSpeed: 10
})
.changeDelay(40)
.typeString("Bienvenue sur ma fiche !")
.pauseFor(500)
.deleteChars(24)
.typeString("N'hésitez pas à me contacter ")
.pauseFor(500)
.deleteChars(29)
.typeString("Bonne visite 🙂")
.pauseFor(1000)
.deleteChars(15)
.typeString("Sarah	Bensouna")
.start();

// animation sylvain
const txtAnim16 = document.querySelector('.sylvain');

new Typewriter(txtAnim16, {
    deleteSpeed: 10
})
.changeDelay(40)
.typeString("Bienvenue sur ma fiche !")
.pauseFor(500)
.deleteChars(24)
.typeString("N'hésitez pas à me contacter ")
.pauseFor(500)
.deleteChars(29)
.typeString("Bonne visite 🙂")
.pauseFor(1000)
.deleteChars(15)
.typeString("Sylvain Laconi")
.start();

// animation tom
const txtAnim17 = document.querySelector('.tom');

new Typewriter(txtAnim17, {
    deleteSpeed: 10
})
.changeDelay(40)
.typeString("Bienvenue sur ma fiche !")
.pauseFor(500)
.deleteChars(24)
.typeString("N'hésitez pas à me contacter ")
.pauseFor(500)
.deleteChars(29)
.typeString("Bonne visite 🙂")
.pauseFor(1000)
.deleteChars(15)
.typeString("Tom carpentier")
.start();

// animation violaine
const txtAnim19 = document.querySelector('.violaine');

new Typewriter(txtAnim19, {
    deleteSpeed: 10
})
.changeDelay(40)
.typeString("Bienvenue sur ma fiche !")
.pauseFor(500)
.deleteChars(24)
.typeString("N'hésitez pas à me contacter ")
.pauseFor(500)
.deleteChars(29)
.typeString("Bonne visite 🙂")
.pauseFor(1000)
.deleteChars(15)
.typeString("Violaine Ernotte")
.start();