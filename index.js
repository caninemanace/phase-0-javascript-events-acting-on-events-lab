// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    let left = parseInt(dodger.style.left.replace("px", ""));
    if (left > 0) {
        dodger.style.left = `${left - 20}px`;
    }
}

function moveDodgerRight() {
    let left = parseInt(dodger.style.left.replace("px", ""));
    if (left < 360) {  // Prevents dodger from going beyond 360px
        dodger.style.left = `${left + 20}px`;
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});
