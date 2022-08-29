// We need to find the grades of Mark
// If between 0 - 40 --> grade is D
// 40 - 60 --> C
// 60 - 80 --> B
// above 80 --> A
var stdnt1 = 50
var stdnt2 = 70
var stdnt3 = 90
var mark = stdnt1
if (mark > 100 || mark < 0) {
    console.log("invalid")
} else if (mark >= 80) {
    console.log("A")
} else if (mark >= 60) {
    console.log("B")
} else if (mark >= 40) {
    console.log("C")
} else {
    console.log("D")
}