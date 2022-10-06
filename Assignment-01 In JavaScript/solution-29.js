// Problem Statement
`Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

`
// Solution
favorite_fruits =["Mango" , "Banana" , "Graps"]

for (let fruits in favorite_fruits){
    if (favorite_fruits.indexOf("Mango") == fruits ){
        console.log(`You really like ${favorite_fruits[fruits]}`)
    }
    if (favorite_fruits.indexOf("Banana") == fruits ){
        console.log(`You really like ${favorite_fruits[fruits]}`)
    }
    if (favorite_fruits.indexOf("Orange") == fruits ){
        console.log("This Fruite not in you array")
    }
    if (favorite_fruits.indexOf("Peach") == fruits ){
        console.log("This Fruite not in you array")
    }
    if (favorite_fruits.indexOf("Graps") == fruits ){
        console.log(`You really like ${favorite_fruits[fruits]}`)
    }
}