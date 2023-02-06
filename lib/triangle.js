const Shapes = require("./shapes");



class Triangle extends Shapes { 

    constructor(color,text,design) {
        super(color,text,design)
        this.color = "white";
        this.text = "dlg"
        this.design = "blue";
        console.log("you want a triangle!")
        this.shape = 'polygon points="150, 18 244, 182 56, 182';
    }
 };
 module.exports = Triangle;
 
 