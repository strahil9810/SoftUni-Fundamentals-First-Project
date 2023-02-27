function triangleArea(firstSize, secondSize, thirdSize) {

    let sizeA = Number(firstSize);
    let sizeB = Number(secondSize);
    let sizeC = Number(thirdSize);

    let semiPerimeter = 1/2 * (sizeA + sizeB + sizeC);
    let area = Math.sqrt(semiPerimeter * (semiPerimeter - sizeA) * (semiPerimeter - sizeB) * (semiPerimeter - sizeC));

    console.log(area);
}
triangleArea(2, 3.5, 4)