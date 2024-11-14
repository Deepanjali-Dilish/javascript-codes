// given number is positive,negative or zero

function number(val) {
    if (val > 0) {
        return "Positive";
    } else if (val < 0){
        return "Negative";
    }else {
        return "zero";
    }
    
}

console.log(number(0));

