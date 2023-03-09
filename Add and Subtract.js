function addAndSubstract(input) {

    let resultArray = [];
    let inputArraySum = 0;
    let resultArraySum = 0;
    let inputLength = input.length;

    for (let index = 0; index < inputLength; index++) {

        let currentNumber = input[index];
        let odd = currentNumber - index;
        let even = currentNumber + index;

        if (currentNumber % 2 === 0) {
            resultArray.push(even);
        }
        else {
            resultArray.push(odd);
        }

        inputArraySum += currentNumber;
        resultArraySum += resultArray[index];
    }

    console.log(resultArray);
    console.log(inputArraySum);
    console.log(resultArraySum);
}
addAndSubstract([5, 15, 23, 56, 35])