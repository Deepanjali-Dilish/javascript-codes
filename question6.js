// calculate the multiplication table of the given number

function multiplicationTable(n){
    for(i=0; i<=10; i++) {
        console.log(`${i} x ${n} = ${n*[i]}`);
    }
}

multiplicationTable(5);
