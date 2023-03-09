//Първи начин на решаване
function printNthElement(input) {

    let step = Number(input[input.length - 1]);
    let resultArray = [];
    let result = '';
    let inputLength = input.length;

    for (let index = 0; index < inputLength - 1; index++) {

        resultArray.push(input[index]);
    }

    for (let secondIndex = 0; secondIndex < resultArray.length; secondIndex += step) {
        result += resultArray[secondIndex] + ' ';
    }

    console.log(result);
}
printNthElement(['dsa', 'asd', 'test', 'test', '2'])



//Втори начин на решаване
function printElement(input) {

    let step = Number(input[input.length - 1]);
    let resultArray = [];
    let result = '';
    let inputLength = input.length;

    for (let index = 0; index < inputLength - 1; index++) {

        resultArray.push(input[index]);
    }

    let secondIndex = 0;

    while (secondIndex < resultArray.length) {
        result += resultArray[secondIndex] + ' ';

        secondIndex += step;
    }

    console.log(result);
}
printElement(['5', '20', '31', '4', '20', '2'])