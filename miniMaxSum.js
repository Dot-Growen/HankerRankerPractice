// 4. Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// sort the incoming arr
// create a variable x that equals the inpuat array's length
// create a variable y and z starting at 0
// create a loop that iterate by 1 until the 1 before the last item
// plus equals y to arr[i]
// plus equals z to arr[x]
// decrement x 
// console log x and y one space apart



function miniMaxSum(arr) {
    arr.sort()

    var x = arr.length - 1
    var y = 0
    var z = 0

    for (var i = 0; i < arr.length - 1; i++) {
        y += arr[i]
        z += arr[x]
        x--
    }
    console.log(y + " " + z)
}

miniMaxSum([3, 5, 1, 4, 2])