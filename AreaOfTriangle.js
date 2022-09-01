const sides = document.querySelectorAll(".side-input");
const calculateTriangle = document.querySelector("#triangle-btn");
const outputCheck = document.querySelector("#output");

function calculateProductOfSide(base, height) {

  const sideOfTriangle = (base * height);
  return sideOfTriangle;

}

function calculateAreaOfTriangle() {
  const sideOfTriangle = calculateProductOfSide(Number(sides[0].value), Number(sides[1].value));

  if (Number(sides[0].value) && Number(sides[1].value)) {
    const areaOfTriangle = sideOfTriangle / 2;

    outputCheck.innerText = "The area of Triangle is " + areaOfTriangle;
  } else {
    outputCheck.innerText = "Please enter both the fields";
  }

}

calculateTriangle.addEventListener('click', calculateAreaOfTriangle);