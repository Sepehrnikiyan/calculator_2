document.addEventListener("DOMContentLoaded", function(){
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("#keyboard button");
})

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", function (){
        const value = this.textContent;

        currentInput += value;

        display.textContent = currentInput;
    })
};

const clearDisplay = document.querySelector(".clear-display");
clearDisplay.addEventListener("click" , function(){
    currentInput = "";
    display.textContent = currentInput;
})

const eqaul = document.querySelector(".operator:nth-child(15)")
eqaul.addEventListener("click", function(){
    try {
        switch () {
            case value:
                
                break;
        
            default:
                break;
        }
    } catch (error) {
        currentInput = "Error";
        display.textContent = currentInput;
    }
})