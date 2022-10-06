
// Problem Statement
`Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.`



// Solution
function show_magicians(magicians){
    for (i=0; i<magicians.length; i++){
        console.log(magicians[i])
    }
}

function make_great(magicians){
    const great_magicians= []

    while (magicians.length) {
        var magician= magicians.pop()
        var great_magician = magician + " The Great"
        great_magicians.push(great_magician)
    }

    for (j=0; j<great_magicians.length;j++){
        magicians.push(great_magicians[j])
    }
    return magicians
}

let magicians = ['Harry', 'David', 'Teller']
show_magicians(magicians)


var great_magician=make_great(magicians.slice())

console.log("\nGreat Magicians")
show_magicians(great_magician)

console.log("\nOriginal Magicians")

show_magicians(magicians)