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
  alert(`Merci ${userName.value} de nous avoir contacté !`);
}