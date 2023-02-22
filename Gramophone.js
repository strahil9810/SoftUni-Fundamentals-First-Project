function gramophone(bandName, albumName, albumSongName){

    let sum = (bandName.length * albumName.length) * albumSongName.length / 2;
    let result = Math.ceil(sum / 2.5);

    console.log(`The plate was rotated ${result} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')