function cone(firstSize, secondSize) {

    let radius = Number(firstSize);
    let height = Number(secondSize);
    let slantHeight = Math.sqrt(radius * radius + height * height);

    let volume = (Math.PI * radius * radius * height) / 3;
    let area = Math.PI * radius * radius + Math.PI * radius * slantHeight;

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}
cone(3.3, 7.8)