function calculator(firstNumber, operand, secondNumber) {
    let numberOne = Number(firstNumber);
    let operation = operand;
    let numberTwo = Number(secondNumber);

    let result = 0;

    if (operation === '+') {
        result = numberOne + numberTwo;
    }
    else if (operation === '-') {
        result = numberOne - numberTwo;
    }
    else if (operation === '*') {
        result = numberOne * numberTwo;
    }
    else if (operation === '/') {
        result = numberOne / numberTwo;
    }

    console.log(result.toFixed(2));
}
calculator(25.5, '-', 3)