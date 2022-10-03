// Problem Statement:

`Guest List: If you could invite anyone,
living or deceased, to dinner, who would you invite?
Make a list that includes at least three people
you’d like to invite to dinner. Then use your list to print a message to each person,
inviting them to dinner.`


// Solution: 
var invidedPeople = ["Zia Khan","Daniyal Khan" , "Atif" , "Azeem"]

for (i=0; i<invidedPeople.length; i++){
    console.log(`
    Hi! ${invidedPeople[i]} 
       We are gladly inviting you to join us on ${Date()} as we plan to arrange a delicious dinner party.
       `)
}
