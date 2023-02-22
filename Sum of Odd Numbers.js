function sumOfOddNumbers(input){
    let number = Number(input);
    let sum = 0;
    let counter = 0;

    for(let index = 1; index <= 100; index += 2){
        console.log(index);
        counter++;
        sum += index;

        if(counter === number){
            console.log(`Sum: ${sum}`);
            break;
        }
    }
}
sumOfOddNumbers(5)