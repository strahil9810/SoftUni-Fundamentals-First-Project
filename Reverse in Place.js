function reverseInPlace(input){

    for(let index = 0; index < input.length / 2; index++){
        let cur = input.length - 1 - index;
        let temp = input[index];

        input[index] = input[cur];
        input[cur] = temp;
    }

    console.log(input.join(' '));
}
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop'])