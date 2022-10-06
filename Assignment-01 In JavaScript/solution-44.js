// Problem Statement

`
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.`



// Solution
function make_sandwich(items){
    // items.forEach(element => {
    //     console.log(element)
    // });
    for (let item in items){
        console.log(items[item])
    }
}


make_sandwich(['roast beef', 'cheddar cheese', 'lettuce', 'honey dijon'])
console.log(" ")
make_sandwich(['turkey', 'apple slices', 'honey mustard'])
console.log(" ")
make_sandwich(['peanut butter', 'strawberry jam'])