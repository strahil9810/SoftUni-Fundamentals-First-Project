//Първи начин за решаване
function reverseanArray(needNumber, array) {

    let newArray = [];

    for (let index = 0; index < needNumber; index++) {
        let currentNumber = array[index];

        newArray.push(currentNumber);
    }

    console.log(newArray.reverse().join(' '));
}
reverseanArray(4, [-1, 20, 99, 5])


//Втори начин за решаване
function reverse(end, num) {

    let reverseNumberInArray = [];

    for (let index = 0; index < end; index++) {
        reverseNumberInArray[end - 1 - index] = num[index];
    }

    let resultInArray = '';

    for (let index = 0; index < reverseNumberInArray.length; index++) {
        resultInArray += reverseNumberInArray[index];

        if (index < reverseNumberInArray.length - 1) {
            resultInArray += ' ';
        }
    }

    console.log(resultInArray);
}
reverse(4, [-1, 20, 99, 5])