function nonDecreasingSubset(input) {

    let resultArray = [];
    let bigestNumber = 0;
    let inputLength = input.length;

    for(let index = 0; index < inputLength; index++){

        if(bigestNumber <= input[index]){
            bigestNumber = input[index];

            resultArray.push(bigestNumber);
        }
    }

    console.log(resultArray.join(' '));
}
nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24])
//RESULT: 1 3 8 10 12 24