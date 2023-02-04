class BasicCalculator{

    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    add(){
        this.result = this.x + this.y;
        console.log(`Result: ${this.x} + ${this.y} = ${this.result}`)
        document.write(`Result: ${this.x} + ${this.y} = ${this.result}`)
    }

    subtract(){
        this.result = this.x - this.y;
        console.log(`Result: ${this.x} - ${this.y} = ${this.result}`)
        document.write(`Result: ${this.x} - ${this.y} = ${this.result}`)
    }

    multiply(){
        this.result = this.x * this.y;
        console.log(`Result: ${this.x} * ${this.y} = ${this.result}`)
        document.write(`Result: ${this.x} * ${this.y} = ${this.result}`)
    }

    divide(){
        this.result = this.x / this.y;
        console.log(`Result: ${this.x} / ${this.y} = ${this.result}`)
        document.write(`Result: ${this.x} / ${this.y} = ${this.result}`)
    }

};

class ExtendedCalculator extends BasicCalculator {
// Inheritance of the entire base class ( constructor and methods )

    compounding(){
    // addition of an additional method
        this.result = Math.pow(this.x, this.y); 
        console.log(`Result: ${this.x} ^ ${this.y} = ${this.result}`)
        document.write(`Result: ${this.x} ^ ${this.y} = ${this.result}`)
    }

}


function BasicInputTaker(){
/*
I have read that it is more recommended to use classes when inheriting, 
but for the purpose of learning the possibilities of inheritance and object-orientedness in JS,
I used the function here
*/
    this.input_x = prompt("Give x: ")
    console.log("input x: " + this.input_x);
    this.input_y = prompt("Give y: ")
    console.log("input y: " + this.input_y);
}

BasicInputTaker.prototype.createCalculatorObject = function() {
    this.int_x = parseInt(this.input_x)
    this.int_y = parseInt(this.input_y)
    console.log("int x: " + this.int_x);
    console.log("int y: " + this.int_y);
    this.calc = new BasicCalculator(this.int_x, this.int_y);
}

BasicInputTaker.prototype.selectAction = function() {
    window.alert(" type '+' if you want to add \n type '-' of you want to subtract \n type '*' if you want to multiply \n type '/' if you want to divide ");

    this.input_action = prompt("What do you want to do?")

}

BasicInputTaker.prototype.performActionOnCalculator = function() {
    switch (this.input_action) {

        case '+':
            this.calc.add();
            break;
        case '-':
            this.calc.subtract();
            break;
        case '*':
            this.calc.multiply();
            break;
        case '/':
            this.calc.divide();
            break;

        default:
            console.log(`Bad input action value, you sent "${input_action}"`);
            document.write(`Bad input action value, you sent "${input_action}"`);
    };
};

function ExtendedInputTaker(){
    BasicInputTaker.call(this);
    // Inheritance of the base function constructor
}

ExtendedInputTaker.prototype = Object.create(BasicInputTaker.prototype);
// Inheritance of a prototype from a base function

ExtendedInputTaker.prototype.createCalculatorObject = function() {
// Overriding a method from the base function ( change from int to float )
    this.float_x = parseFloat(this.input_x)
    this.float_y = parseFloat(this.input_y)
    console.log("int x: " + this.float_x);
    console.log("int y: " + this.float_y);
    this.calc = new ExtendedCalculator(this.float_x, this.float_y);
}

// window.alert(" type '+' if you want to add \n type '-' of you want to subtract \n type '*' if you want to multiply \n type '/' if you want to divide \n type '^' if you want to compound ");



// const input = new BasicInputTaker();
const input = new ExtendedInputTaker();
input.createCalculatorObject();
input.selectAction();
input.performActionOnCalculator();
