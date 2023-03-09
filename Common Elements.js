function commonElements(firstArray, secondArray) {

    for (let firstIndex = 0; firstIndex < firstArray.length; firstIndex++) {
        for (let secondIndex = 0; secondIndex < secondArray.length; secondIndex++) {
            if (firstArray[firstIndex] === secondArray[secondIndex]) {
                console.log(firstArray[firstIndex]);
            }
        }
    }
}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
)