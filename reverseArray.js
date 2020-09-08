// 6. Given an array, , of  integers, print each element in reverse order as a single line of space-separated integers

function reverseArray(a) {
    var x = 1
    for (var i = 0; i < a.length / 2; i++) {
        var temp = a[i]
        a[i] = a[a.length - x]
        a[a.length - x] = temp
        x++
    }

    return a
}
reverseArray([1, 2, 3, 4, 5])