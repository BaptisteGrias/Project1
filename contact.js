
const myText = document.getElementById(".input-selector");
console.log(myText)
myText.addEventListener('click', function (event){
    myText.style.backgroundColor = "white";
    console.log(event);
});




const userName = document.querySelector("#name");
const form = document.querySelector(".contact-form");


form.onsubmit = function(event) {
  event.preventDefault();
  alert(`Merci ${userName.value} de nous avoir contacter!`);
}

