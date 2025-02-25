document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("#keyboard button");
    let currentInput = "";

  
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = this.textContent;
            currentInput += value;
            display.textContent = currentInput;
        });
    });


    const clearDisplay = document.querySelector(".clear-display");
    clearDisplay.addEventListener("click", function() {
        currentInput = "";
        display.textContent = "0"; 
    });

   
    const equal = document.querySelector(".operator:nth-child(16)"); // فرض می‌کنم '=' پانزدهمین دکمه است
    equal.addEventListener("click", function() {
        try {

            const parts = currentInput.split(/([+\-*/])/);
            const num1 = parseFloat(parts[0].trim()); // عدد اول
            const operator = parts[1] ? parts[1].trim() : null; // عملگر (اگه باشه)
            const num2 = parseFloat(parts[2].trim()); // عدد دوم

          
            if (!operator || isNaN(num2)) {
                throw new Error("Invalid input");
            }

            let result;
            switch (operator) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    if (num2 === 0) throw new Error("Divide by zero");
                    result = num1 / num2;
                    break;
                default:
                    throw new Error("Invalid operator");
            }

            currentInput = result.toString();
            display.textContent = currentInput;
        } catch (error) {
            currentInput = "Error";
            display.textContent = currentInput;
            setTimeout(() => {
                currentInput = "";
                display.textContent = "0"; 
            }, 1000);
        }
    });
});