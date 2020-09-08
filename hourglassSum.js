// 7. Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum. (Level 2)
// create a max variable and set it to 0
// start looping the variable i through the arr
// start a looping variable j through the arr
// if i or j is not 0 or 5
// calculate the sum of the hourglass and save it to glassVal variable
// if glassVal is greater then max set max = glassVal
// return max


function hourglassSum(arr) {
    var max = 0
    for( var i = 0; i < arr.length; i++){
        for( var j = 0; j < arr.length; j++){
            if((i !== 0) && (j !== 0) && (j !== 5) && (i !== 5)) {
                var glassVal = (arr[i][j] + arr[i-1][j-1] + arr[i-1][j] + arr[i-1][j+1] + arr[i+1][j-1] + arr[i+1][j] + arr[i+1][j+1])
                if(glassVal > max){
                    max = glassVal
                }
            }
        }
    }
    return max
}
hourglassSum([[-9, -9, -9, 1, 1, 1],
              [0, -9, 0, 4, 3, 2],
              [-9, -9, -9, 1, 2, 3],
              [0, 0, 8, 6, 6, 0],
              [0, 0, 0, -2, 0, 0],
              [0, 0, 1, 2, 4, 0]])