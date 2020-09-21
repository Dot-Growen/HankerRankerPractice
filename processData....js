function processData(input) {

    let newInput = []
    let queries = []
    let query = []
    let x = input[0]
    let i = 4
    while (i < (x * 2 + 4)) {
        newInput.push(parseInt(input[i]))
        i += 2
    }

    for (var j = 20; j < input.length; j += 6) {
        query.push(parseInt(input[j]))
        query.push(parseInt(input[j + 2]))
        query.push(parseInt(input[j + 4]))
        queries.push([...query])
        query = []
    }
    let n = newInput[6]
    queries.forEach(([type, startIdx, endIdx]) => {
        let removed = newInput.slice(startIdx-1, endIdx)
        let deleteCount = (endIdx - startIdx) + 1
        if (type == 1) {
            newInput.splice(startIdx-1, deleteCount)
            newInput = [...removed, ...newInput]
        } else if ( type == 2 ) {
            newInput.splice(startIdx-1, deleteCount)
            newInput = [...newInput, ...removed]
        }
    });

    let finalOutput = ''

    for(var l = 0; l < newInput.length; l++){
        finalOutput += newInput[l]
        finalOutput += " "
    }
    
    console.log(Math.abs(newInput[0]-newInput[n]))
    console.log(finalOutput)
    
    // console.log(newInput)
 

}


processData("8 4 1 2 3 4 5 6 7 8 1 2 4 2 3 5 1 4 7 2 1 4")