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