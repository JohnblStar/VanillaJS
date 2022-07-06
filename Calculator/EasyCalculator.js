const calculator = {
    pls: function(firstNum, secondNum){
        console.log(firstNum + secondNum);
    },
    min: function(firstNum, secondNum){
        console.log(firstNum - secondNum);
    },
    multi: function(firstNum, secondNum){
        console.log(firstNum * secondNum);
    },
    div: function(firstNum, secondNum){
        console.log(firstNum / secondNum);
    },
    pwo: function(firstNum, secondNum){
        console.log(firstNum ** secondNum);
    }
}

calculator.pls(1000, 2);
calculator.min(1000, 2);
calculator.multi(1000, 2);
calculator.div(1000, 2);
calculator.pwo(1000, 2);
