const Square = require("./square");
const square = new Square();




test('that set changing the fill to blue will change the color', () => {

    square.setColor = "blue";
    expect(Square.prototype.render(square.setColor)).toMatch(`<rect x="25" y="25" width="200" height="200" fill="blue" />`);
});