function rightPlace(placeWith_, char, result){
    let res = placeWith_.replace('_', char);
    let output = res === result ? 'Matched' : 'Not Matched';

    console.log(output);
}
rightPlace('Str_hil', 'a', 'Strahil')