// Arrays: Left Rotation

// Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

function rotLeft(a, d) {
    while (d > 0) {
        var temp = a[a.length - 1]
        a[a.length - 1] = a[0]
        for (var i = 1; i < a.length - 1; i++) {
            a[i - 1] = a[i]
        }
        a[a.length - 2] = temp
        d--
    }
    return a
}
