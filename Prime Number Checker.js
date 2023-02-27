function primeNumberChercker(input) {

    let isPrime = true;

    for(let index = 2; index < input; index++){

        if(input % index === 0){
            isPrime = false;
            break;
        }
        else{
            isPrime = true;
        }
    }

    console.log(isPrime);
}
primeNumberChercker(7)