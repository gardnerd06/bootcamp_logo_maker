const index = require("../index");
const Shapes = require("./shapes");

class Circle extends Shapes{ 
    constructor(color,text,design) {
        super(color,text,design)
        this.color = color;
        this.text = text
        this.design = design;
        console.log(`you want a circle that's ${this.color}!`)
        this.shape = 'circle cx="150" cy="100" r="80"';

    }
 };

 
 module.exports = Circle;