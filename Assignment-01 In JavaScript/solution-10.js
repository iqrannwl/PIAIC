// Problem Statement:

`Adding Comments: Choose two of the programs you’ve written,
and add at least one comment to each. If you don’t have anything
specific to write because your programs are too simple at this point, 
just add your name and the current date at the top of each program file.
Then write one sentence describing what the program does.`

// Solution:

// This is simple javaScript that check weather the number is odd or not
function isEvenOdd(n){
    // Here  i am adding a simple straightforward Condition
    if (n%2===0){
        return `${n} is Even Number!`
    }
    else{
        return `${n} is a ODD Number!`
    }
}
// Now i call a function the function something return so 
// i create result variable that hold a function return value

result = isEvenOdd(8)
console.log(result)