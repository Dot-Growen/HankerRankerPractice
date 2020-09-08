// 5. You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.

// find the max on the input arr
// create a variable "count" to count the number of tallest candles 
// create a loop the iterate through the arr
// set a condition increments the count for each tallest



function birthdayCakeCandles(arr) {

    let tallest = Math.max(...arr)
    let count = 0

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == tallest) {
            count++
        }
    }
    return count;

}

birthdayCakeCandles([3, 2, 1, 3])