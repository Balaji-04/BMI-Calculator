'use strict';
const output = document.querySelector('.output');

function calculateBMI(){
    let w = Number(document.getElementById('weight').value);
    let h = Number(document.getElementById('height').value);
    h = h/100;
    const res = w / h**2;
    
    if (!isNaN(res)){
        if (res < 18.5) {
            output.innerHTML = `Your BMI: ${res.toFixed(2)} falls into UnderWeight`;
        }else if(res > 18.5 && res < 24.9){
            output.innerHTML = `Your BMI: ${res.toFixed(2)} falls into Normal`;
        }else if(res > 24.9 && res < 40){
            output.innerHTML = `Your BMI: ${res.toFixed(2)} falls into OverWeight`;
        }else{
            output.innerHTML = `Your BMI: ${res.toFixed(2)} falls into Obese Category`;
        }
    }
}