// Problem Statement
`Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians
by adding the phrase the Great to each magician’s name. Call show_magicians()
to see that the list has actually been modified.

`
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
}

var magicians = ['Harry', 'David', 'Teller']
show_magicians(magicians)
console.log("\n")
make_great(magicians)
show_magicians(magicians)