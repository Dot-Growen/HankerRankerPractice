// 1. Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(arr) {
    var diag1 = 0
    var diag2 = 0
    var x = 0
    var y = 0
    var boxSize = arr[x].length
    var z = boxSize - 1

    for (var i = 1; i <= boxSize; i++) {
        diag1 += arr[x][y]
        diag2 += arr[x][z]
        x++
        y++
        z--
    }

    return Math.abs(diag1 - diag2)
}

console.log(diagonalDifference(
    [
        [1, 2, 3],
        [4, 5, 6],
        [9, 8, 9]]))