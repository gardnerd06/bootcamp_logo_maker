const index = require("../index");
const Shapes = require("./shapes");
// created a child class that inherits its values from the shapes class and add code for a circle.
class Circle extends Shapes {
    constructor(color, text, setColor, polygon) {
        super(color, text, setColor, polygon)

        Circle.prototype.render = function (setColor) {
            this.shape = `<circle cx="150" cy="100" r="80" fill="${setColor}"/>`;
            return this.shape;
        };
    }
};


module.exports = Circle;