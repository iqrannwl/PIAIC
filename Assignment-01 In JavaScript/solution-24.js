// Problem Statement
`More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array`


// Solution

// String Test
console.log("String testing")
console.log("python" !== "javaScript")
console.log("python" == "javascript")


string1= "python"
string2 = "python"
console.log(string1 == string2)
console.log(string1 !== string2)

// Numbers
console.log("Number testing")
console.log(2>3)
console.log(3<2)
console.log(5>6 || 2<7)


// Other testing 
// 

console.log("Arry Testing")
items = [34,32,56]
console.log(Array.isArray(items))