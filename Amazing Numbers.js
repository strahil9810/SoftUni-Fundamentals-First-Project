function amazingNumber(input) {
    let number = input.toString();
    let sum = 0;

    for (let index = 0; index < number.length; index++) {
        let currentNumber = Number(number[index]);

        sum += currentNumber;
    }

    let result = sum.toString().includes('9');

    console.log(result ? `${number} Amazing? True` : `${number} Amazing? False`);
}
amazingNumber([999])