function mergeSort(array = []) {
    if (array.length === 1) {
        return array;
    }

    const middle = Math.round((array.length / 2));
    let leftSide = [], rightSide = [];
    (function split() {
        for (let i = 0; i < middle; i++) {
            leftSide.push(array[i]);
        }
        for (let i = middle; i < array.length; i++) {
            rightSide.push(array[i]);
        }
        leftSide = mergeSort(leftSide);
        rightSide = mergeSort(rightSide);
    })();

    let mergedArray = [];
    (function merge() {
        for (let i = 0; i < array.length; i++) {
            if (leftSide[0] === undefined) {
                for (const value of rightSide) {
                    mergedArray.push(value);
                }
                break;
            } else if (rightSide[0] === undefined) {
                for (const value of leftSide) {
                    mergedArray.push(value);
                }
                break;
            } else {
                if (leftSide[0] < rightSide[0]) {
                    mergedArray.push(leftSide.shift());
                } else {
                    mergedArray.push(rightSide.shift());
                }
            }
        }
    })();
    return mergedArray;
}
//console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));