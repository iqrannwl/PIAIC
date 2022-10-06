// Problem Statement
`Large Shirts: Modify the make_shirt() function so that shirts are large by default with a
 message that reads I love JavaScript. Make a large shirt and a medium shirt with the default 
 message, and a shirt of any size with a different message.

`
// Solution
function make_shirt(size="large" , message="I Love JavaScript"){
    console.log(`Size: ${size}\nMessage: ${message}`)
}

make_shirt("Small","I love Pakistan")