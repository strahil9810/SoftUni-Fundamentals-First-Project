function chessBoard(input) {

    let size = Number(input);
    let currentColor = 'black';
    let previousColor = '';

    console.log('<div class="chessboard">');

    for (let row = 1; row <= size; row++) {
        console.log('  <div>');

        for (let col = 1; col <= size; col++) {
            console.log(`   <span class="${currentColor}"></span>`);

            previousColor = currentColor;

            currentColor = previousColor === 'black' ? 'white' : 'black';
        }

        console.log('  </div>');

        if (size % 2 === 0) {
            previousColor = currentColor;
            currentColor = previousColor === 'black' ? 'white' : 'black';
        }
    }

    console.log('</div>');
}
chessBoard(3)