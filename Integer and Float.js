function integerOrFloat(firstNumber, secondNumber, thirdNumber) {

    let sum = firstNumber + secondNumber + thirdNumber;
    let type = '';

    if (Number.isInteger(sum)) {
        type = 'Integer';
    }
    else {
        type = 'Float';
    }

    console.log(`${sum} - ${type}`);
}
integerOrFloat(100, 200, 303)


// Втори начин за решаване чрез тернарен оператор
function solve(input){
    let numberFirst = Number(input.shift());
    let numberSecond = Number(input.shift());
    let numberThird = Number(input.shift());

    let sum = numberFirst + numberSecond + numberThird;
    
    // Тернарен оператор
    let typeIntegerOrFloat = Number.isInteger(sum) ? 'Integer' : 'Float';

    console.log(`${sum} - ${typeIntegerOrFloat}`);
}
solve([9, 100, 1.1])