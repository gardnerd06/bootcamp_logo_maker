const Shapes = require("./shapes");

// created a child class that inherits its values from the shapes class and add code for a circle.
class Triangle extends Shapes { 

    constructor(color,text,design) {
        super(color,text,design)
        this.shape = 'polygon points="150, 18 244, 182 56, 182"';
    }
 };
 module.exports = Triangle;
 
 