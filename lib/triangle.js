const index = require("../index");
const Shapes = require("./shapes");

// created a child class that inherits its values from the shapes class and add code for a circle.
class Triangle extends Shapes {

    constructor(color, text, setColor, polygon) {
        super(color, text, setColor, polygon)

        Triangle.prototype.render = function (setColor) {
            this.shape = `<polygon points="150, 18 244, 182 56, 182" fill="${setColor}" />`;
            return this.shape;
        };

    }
};
module.exports = Triangle;

