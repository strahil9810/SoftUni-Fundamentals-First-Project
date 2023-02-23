function sumDigits(input) {
    let numberAsString = input.toString();
    let sum = 0;

    for (let index = 0; index < numberAsString.length; index++) {
        let number = Number(numberAsString[index]);

        sum += number;
    }

    console.log(sum);
}
sumDigits(245678)