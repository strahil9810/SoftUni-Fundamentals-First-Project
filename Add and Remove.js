function addAndRemove(input){

    let resultArray = [];
    let counter = 1;
    let inputLength = input.length;

    for(let index = 0; index < inputLength; index++){
        
        let command = input[index];

        if(command === 'add'){
            resultArray.push(counter);
        }
        else{
            resultArray.pop();
        }

        counter++;
    }

    if(resultArray.length === 0){
        console.log("Empty");
    }
    else{
        console.log(resultArray.join(' '));
    }
}
addAndRemove(['remove', 'remove', 'remove'])

//1 2 3 4