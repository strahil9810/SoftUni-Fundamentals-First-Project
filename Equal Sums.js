function equalSums(input) {

    let foundIndex = 'no';
    let inputLength = input.length;

    for (let i = 0; i < inputLength; i++) {

        let leftSum = 0;
        let rightSum = 0;

        for (let l = 0; l < i; l++) {

            leftSum = leftSum + input[l];
        }

        for (let r = i + 1; r < inputLength; r++) {
            rightSum = rightSum + input[r];
        }

        if (leftSum === rightSum) {
            foundIndex = i;
        }
    }

    console.log(foundIndex);
}
equalSums([1, 2, 3, 3])