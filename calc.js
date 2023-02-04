class BasicCalculator{

    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    add() {
        this.result = this.x + this.y;
        console.log(`Result of ${this.x} + ${this.y} = ${this.result}`)
    }

};



let input_x = prompt("Give x: ")
let int_x = parseInt(input_x)
let input_y = prompt("Give y: ")
let int_y = parseInt(input_y)
console.log(int_x);
console.log(int_y);

const calc = new BasicCalculator(int_x, int_y);

let input_action = prompt("What do you want to do?")

if (input_action ="add"){
    calc.add()
}
