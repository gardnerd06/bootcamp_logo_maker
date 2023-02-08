const Triangle = require("./triangle");
const triangle = new Triangle();



test('that set changing the fill to blue will change the color', () => {
    triangle.setColor = "blue";
    expect(Triangle.prototype.render(triangle.setColor)).toMatch('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});