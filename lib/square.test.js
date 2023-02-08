const Square = require("./square");



describe('color property test', () => {
    test('that set changing the fill to blue will change the color', () => {
        const square = new Square();
        square.setColor = "blue";
        expect(Square.prototype.render(square.setColor)).toMatch(`<rect x="25" y="25" width="200" height="200" fill="blue" />`);
    })
});