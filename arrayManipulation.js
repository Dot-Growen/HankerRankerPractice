// SOLVED BUT INEFFICIENT

// 8. Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each of the array element between two given indices, inclusive. Once all operations have been performed, return the maximum value in your array. (NOT DONE)

// create a array the n zeros



function arrayManipulation(n, queries) {
    var zeros = []
    for (var i = 0; i < n; i++) {
        zeros.push(0)
    }
    var w = 2
    var x = 0
    var y = 0
    var z = 1
    function row(s) {
        if (s === 0) {
            return Math.max(...zeros)
        } else {
            for (var j = queries[x][y]; j <= queries[x][z]; j++) {
                zeros[j - 1] += queries[x][w]
            }
            x++
            return row(s - 1)
        }
    }
    row(queries.length)
    return Math.max(...zeros)
}

console.log(arrayManipulation(5, [[1, 2, 100],
[2, 5, 100],
[3, 4, 100]
])
)

        // queries[0][0]
        // queries[1][0]
        // queries[2][0]

                    // queries[0][1]
                    // queries[1][1]
                    // queries[2][1]

                                // queries[0][2]
                                // queries[1][2]
                                // queries[2][2]

    // Quadratic time complexity

    // for (var i = 0; i < queries.length; i++) {
    //     for (var j = queries[x][y]; j <= queries[x][z]; j++) {
    //         console.log(x, y)
    //         zeros[j - 1] += queries[x][w]
    //     }

    //     x++
    // }
    // return Math.max(...zeros)