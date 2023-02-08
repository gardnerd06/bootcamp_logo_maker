const Circle = require("./circle")
const circle = new Circle();



test('that set changing the fill to blue will change the color', () => {
    circle.setColor = "blue";
    expect(Circle.prototype.render(circle.setColor)).toMatch('<circle cx="150" cy="100" r="80" fill="blue"/>');
});