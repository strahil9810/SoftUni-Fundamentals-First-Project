function triplesLatinLetters(input) {

    for(let i = 0; i < input; i++){
        for(let j = 0; j < input; j++){
            for(let k = 0; k < input; k++){
                let letterA = String.fromCharCode(97 + i);
                let letterB = String.fromCharCode(97 + j);
                let letterC = String.fromCharCode(97 + k);

                console.log(`${letterA}${letterB}${letterC}`);
            }
        }
    }
}
triplesLatinLetters(2)