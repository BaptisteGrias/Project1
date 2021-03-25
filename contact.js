
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