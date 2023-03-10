function rotateArray(array){

    let stepRotate = array[array.length - 1];
    array.pop();

    for(let index = 0; index < stepRotate; index++){

        let lastElement = array.pop();
        array.unshift(lastElement);
    }

    console.log(array.join(' '));
}
rotateArray(['1', '2', '3', '4', '2'])


//Втори начин на решаване
function rotate(input){

    let step = input[input.length - 1];
    input.pop();

    for(let stepIndex = 0; stepIndex < step; stepIndex++){

        let firstElement = input.shift();
        input.push(firstElement);
    }

    console.log(input.join(' '));
}
rotate(['10', '20', '30', '40', '2'])