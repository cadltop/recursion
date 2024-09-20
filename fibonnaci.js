// Iteration
function fibs(number) {
    let i = 0;
    let sequence = [];
    let value;
    
    while(i < number) {
        if(i >= 2){
            value = sequence[i-1] + sequence[i-2];
            sequence.push(value);
        } else {
            sequence.push(i);
        }
        i++;
    }
    return sequence;
}
// console.log(fibs(8));

// Recursion
function fibsRec(number) {
    if (number < 2){
        return number;
    }
    return fibsRec(number-1) + fibsRec(number-2);
}

function showRecursion(n) {
    let sequence = []
    for (let i = 0; i < n; i++) {
        sequence.push(fibsRec(i));
    }
    return sequence;
}
//console.log(showRecursion(8));