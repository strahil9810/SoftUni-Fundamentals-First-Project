function sumEvenElement(input) {

    let sum = 0;

    for (let index = 0; index < input.length; index++) {
        let number = Number(input[index]);

        if (number % 2 === 0) {
            sum += number;
        }
    }

    console.log(sum);
}
sumEvenElement(['2', '4', '6', '8', '10'])