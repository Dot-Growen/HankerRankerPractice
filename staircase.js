// 3. Write a program that prints a staircase of size n.

// create a varible x with the value of n - 1
// create a loop the ends at n and increments by 1 
// prints " " x times and "#" i times for each loop
// decrement x


function staircase(n) {
    var x = n - 1
    for (var i = 1; i <= n; i++) {
        console.log(" ".repeat(x) + "#".repeat(i))
        x--
    }
}

staircase(4)