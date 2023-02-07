const index = require("../index");
const Shapes = require("./shapes");
// created a child class that inherits its values from the shapes class and add code for a circle.
class Circle extends Shapes{ 
    constructor(color,text,design) {
        super(color,text,design)
        this.shape = 'circle cx="150" cy="100" r="80"';

    }
 };

 
 module.exports = Circle;