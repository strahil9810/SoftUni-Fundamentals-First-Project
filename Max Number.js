function maxNumber(input){

    let resultArray = [];

    for(let index = 0; index < input.length; index++){
        let isBigger = true;
        let currentNumber = input[index];

        for(let j = index + 1; j < input.length; j++){
            if(currentNumber <= input[j]){
                isBigger = false;
            }
        }

        if(isBigger){
            resultArray.push(input[index]);
        }
    }

    console.log(resultArray.join(' '));
}
maxNumber([1, 4, 3, 2])