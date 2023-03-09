function magicSum(input, magicNumber){

    let inputLength = input.length;

    for(let index = 0; index < inputLength; index++){

        for(let nextIndex = index + 1; nextIndex < inputLength; nextIndex++){
            
            if(input[index] + input[nextIndex] === magicNumber){
                console.log(`${input[index]} ${input[nextIndex]}`);
            }
        }
    }
}
magicSum([14, 20, 60, 13, 7, 19, 8], 27)