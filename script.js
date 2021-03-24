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















/* scroll to top script-------------------------------------------------------------*/

function scrollToTop() {
  window.scroll({top: 0, left: 0, behavior: 'smooth'});
}


/* dark mode-------------------------------------------------------------*/





function functionDarkmode() {
  const element = document.body;
  element.classList.toggle("dark-mode");
} 




/* animation background-------------------------------------------------------------*/

// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 20;
const balls = [];

for (let i = 0; i < numBalls; i++) {
let ball = document.createElement("div");
ball.classList.add("ball");
ball.style.background = colors[Math.floor(Math.random() * colors.length)];
ball.style.left = `${Math.floor(Math.random() * 50)}vw`;
ball.style.top = `${Math.floor(Math.random() * 50)}vh`;
ball.style.transform = `scale(${Math.random()})`;
ball.style.width = `${Math.random()}em`;
ball.style.height = ball.style.width;

balls.push(ball);
document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
let to = {
  x: Math.random() * (i % 2 === 0 ? -11 : 11),
  y: Math.random() * 12
};

let anim = el.animate(
  [
    { transform: "translate(0, 0)" },
    { transform: `translate(${to.x}rem, ${to.y}rem)` }
  ],
  {
    duration: (Math.random() + 1) * 2000, // random duration
    direction: "alternate",
    fill: "both",
    iterations: Infinity,
    easing: "ease-in-out"
  }
);
});












/*scroll to top script de ? -------------------------------------------------------------*/

scrollToTop();
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





/* fiche contact */


const myText = document.getElementsByClassName(".input-selector");

myText.addEventListener('click', function (event){
    myText.style.backgroundColor = "white";
    console.log(event);



const userName = document.querySelector("#name");
const userForm = document.querySelector("#submit-form");

userForm.onsubmit = function(event) {
  event.preventDefault();
  alert(`Thank you  ${firstName.value}`);
};

