const index = require("../index");
const Shapes = require("./shapes");

// created a child class that inherits its values from the shapes class and add code for a square.
class Square extends Shapes {
    constructor(color, text, setColor, polygon) {
        super(color, text, setColor, polygon);

        Square.prototype.render = function (setColor) {
            this.shape = `<rect x="25" y="25" width="200" height="200" fill="${setColor}" />`;
            return this.shape;
        };

    }
};


module.exports = Square;