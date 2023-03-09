function mergeArrays(arrayOne, arrayTwo) {

    let newArray = [];

    for(let index = 0; index < arrayOne.length; index++){
        if(index % 2 === 0){
            newArray.push(Number(arrayOne[index]) + Number(arrayTwo[index]));
        }
        else{
            newArray.push(arrayOne[index] + arrayTwo[index]);
        }
    }

    console.log(newArray.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])