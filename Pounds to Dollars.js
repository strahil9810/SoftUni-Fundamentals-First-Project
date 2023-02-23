function poundsToDollars(input) {
    let pound = Number(input);
    
    const poundValue = 1.31;
    let dollar = pound * poundValue;

    console.log(dollar.toFixed(3));
}
poundsToDollars(39);