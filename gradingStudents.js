// 11. Given the initial value of  for each of Sam's  students, write code to automate the rounding process. 
function gradingStudents(grades) {
    for (var i = 0; i < grades.length; i++) {
        var remainder = grades[i] % 5
        if (remainder >= 3 && grades[i] > 37) {
            grades[i] += (5 - remainder)
        }
    }
    return grades
}