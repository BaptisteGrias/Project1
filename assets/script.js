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
