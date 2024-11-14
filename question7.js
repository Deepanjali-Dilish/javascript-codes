// calculate the factorial of a given number 

function factorial(n){
    if (n<0) {
        return "factoraial number for positive numbers";
    }
    let result = 1;
    for(i=1; i<=n; i++){
        result *= i;
    }
    return result;
}
console.log(factorial(10));

