// Sock Merchant
// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

function sockMerchant(n, ar) {

    let counter = {}
    let val;
    for (let val of ar) {
        counter[val] = (counter[val] || 0) + 1
    }
    let pairs = 0
    for (val in counter) {
        if (counter[val] >= 2) {
            pairs += (Math.floor(counter[val] / 2))
        }
    }
    return pairs

}
console.log(sockMerchant(20, [4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5]))