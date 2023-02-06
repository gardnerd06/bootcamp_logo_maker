const index = require("../index");
const Shapes = require("./shapes");


class Square extends Shapes { 
    constructor(color,text,design) {
        super(color,text,design);
        this.color = color;
        this.text = text
        this.design = design;
        console.log(`you want a square that's ${this.color}!`);
        this.shape = 'rect x="400" y="400"';

    }
 };

 
 module.exports = Square;