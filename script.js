class Calculator {
    constructor() {
        this.result = 0;
    }

    add(num) {
        this.result += num;
    }

    subtract(num) {
        this.result -= num;
    }

    multiply(num) {
        this.result *= num;
    }

    divide(num) {
        if (num === 0) throw new Error("Cannot divide by zero");
        this.result /= num;
    }

    clear() {
        this.result = 0;
    }

    getResult() {
        return this.result;
    }

    calculate(expression) {
        expression = expression.replace(/\s+/g, '');
        if (!/^[0-9+\-*/().]+$/.test(expression)) {
            throw new Error("Invalid characters in expression");
        }
        try {
            let result = new Function(`return ${expression}`)();
            if (!isFinite(result)) throw new Error("Cannot divide by zero");
            this.result = result;
        } catch (error) {
            throw new Error("Invalid mathematical expression");
        }
    }
}

const calc = new Calculator();

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
    calc.clear();
}

function calculateResult() {
    const expression = document.getElementById("display").value;
    try {
        calc.calculate(expression);
        document.getElementById("display").value = calc.getResult();
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}