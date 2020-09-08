// 2. Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Pseudo Flow
// set 3 variables pos, neg, zer equal to 0
// Loop through the arr
// if val is negative, postitive or zero add 1 to the corresponding variable
// print the ratio of each variable to the length of the arr with a set decimal place of 6

function plusMinus(arr) {
    var pos = 0
    var neg = 0
    var zer = 0

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            zer++
        } else if (arr[i] > 0) {
            pos++
        } else {
            neg++
        }
    }
    console.log((pos / arr.length).toFixed(6) + "\n" + (neg / arr.length).toFixed(6) + "\n" + (zer / arr.length).toFixed(6))

}

plusMinus([-1, -2, 0, 9, 8, 9])