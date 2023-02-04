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



function BasicInputTaker(){
/*
I have read that it is more recommended to use classes when inheriting, 
but for the purpose of learning the possibilities of inheritance and object-orientedness in JS,
I used the function here
*/
    this.input_x = prompt("Give x: ")
    this.input_y = prompt("Give y: ")
}

BasicInputTaker.prototype.runBasicCalculator = function() {
    this.int_x = parseInt(this.input_x)
    this.int_y = parseInt(this.input_y)
    console.log(this.int_x);
    console.log(this.int_y);
    this.calc = new BasicCalculator(this.int_x, this.int_y);
}

BasicInputTaker.prototype.selectActionBasicCalculator = function() {

    this.input_action = prompt("What do you want to do?")

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
            console.log(`Bad input action value, you sent "${input_action}", try: '+', '-', '*', '/'.`);
            document.write(`Bad input action value, you sent "${input_action}", try: '+', '-', '*', '/'.`);
    };
};

const input = new BasicInputTaker();
input.runBasicCalculator();
input.selectActionBasicCalculator();
