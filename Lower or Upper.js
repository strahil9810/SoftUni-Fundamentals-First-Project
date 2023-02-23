function lowerOrUpper(input) {
    let letter = input.toString();

    if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) {
        console.log('upper-case');
    }
    else if (letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122) {
        console.log('lower-case');
    }
}
lowerOrUpper('f')

//Втори начин за решаване на задачата с тернарен оператор

function upperLower(input) {

    input === input.toUpperCase() ? console.log('upper-case') : console.log('lower-case');
}
upperLower('L')