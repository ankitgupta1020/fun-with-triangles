const inputs = document.querySelectorAll('.angle-input');
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector('#output');

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].Value), Number(inputs[1].Value), Number(inputs[2].Value));
    
    if (sumOfAngles === 180) {
        outputEl.innerText = "Yay, The angles from a triangle";
    } else {
        outputEl.innerText = "oh no! The angles don't form a triangle"
    }


}
isTriangleBtn.addEventListener("click", isTriangle)