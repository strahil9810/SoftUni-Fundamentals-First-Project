function specialNumbers(input) {
    let isSpecial = true;

    for (let index = 1; index <= input; index++) {
        let sumOfDigits = 0;
        let numberToString = index.toString();
        let stringLength = numberToString.length;

        for (let number = 0; number < stringLength; number++) {

            if (index >= 10) {
                sumOfDigits += Number(numberToString[number]);
            }
            else {
                sumOfDigits += Number([index]);
            }
        }

        if (sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11) {
            isSpecial = true;
        }
        else {
            isSpecial = false;
        }

        if (isSpecial) {
            console.log(`${index} -> True`);
        }
        else {
            console.log(`${index} -> False`);
        }
    }
}
specialNumbers(15)