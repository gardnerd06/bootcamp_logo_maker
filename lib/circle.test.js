const Circle = require("./circle")



describe('color property test', () => {
    test('that set changing the fill to blue will change the color', () => {
        const circle = new Circle();
        circle.setColor = "blue";
        expect(Circle.prototype.render(circle.setColor)).toMatch('<circle cx="150" cy="100" r="80" fill="blue"/>');
    })
});