function sumFirstAndLastElement(input) {

    let firstElement = Number(input[0]);
    let lastElement = Number(input[input.length - 1]);
    let sum = firstElement + lastElement;

    console.log(sum);
}
sumFirstAndLastElement([20, 30, 40])