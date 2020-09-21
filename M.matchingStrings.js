// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

function matchingStrings(strings, queries) {
    let checkup = {}
    let array = []
    let temp = 0

    for (let val of strings) {
        checkup[val] ? checkup[val] += 1 : checkup[val] = 1
    }

    for (var i = 0; i < queries.length; i++) {
        let query = queries[i]
        if (checkup[query]) {
            temp += checkup[query]
        }
        array.push(temp)
        temp = 0
    }
    return array
}