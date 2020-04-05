const css = document.querySelector('h3');

const body = document.getElementById('gradient');

const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');

css.innerHTML = `Colors are: ${color1.value} | ${color2.value}`;

body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

function setGradient() {
    body.style.background = "linear-gradient(to right, " 
                            + color1.value
                            + ", "
                            + color2.value
                            + ")";

     css.innerHTML = `Colors are: ${color1.value} | ${color2.value}`;  
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
