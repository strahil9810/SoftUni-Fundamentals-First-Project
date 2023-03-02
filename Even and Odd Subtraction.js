function evenAndOddSubstraction(input) {

    let evenSum = 0;
    let oddSum = 0;
    let result = 0;

    for (let index = 0; index < input.length; index++) {
        let currentNumber = Number(input[index]);

        if (currentNumber % 2 === 0) {
            evenSum += currentNumber;
        }
        else {
            oddSum += currentNumber;
        }
    }

    result = evenSum - oddSum;

    console.log(result);
}
evenAndOddSubstraction([2, 4, 6, 8, 10])