const index = require("../index");
const Shapes = require("./shapes");


class Square extends Shapes { 
    constructor(color,text,design) {
        super(color,text,design);
        this.color = "white";
        this.text = "dlg"
        this.design = "blue";
        console.log(`you want a square that's ${this.color}!`);
        this.shape = 'rect x="400" y="400"';

    }
 };

 
 module.exports = Square;