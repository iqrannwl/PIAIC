// Problem Statment:

`Changing Guest List: You just heard that one of your guests
can’t make the dinner, so you need to send out a new set of invitations.
You’ll have to think of someone else to invite.`

// Solution:

var invidedPeople = ["Atif" , "Azeem" ,"Aqib"]

for (i=0; i<invidedPeople.length; i++){
    if(invidedPeople[i]==="Aqib"){
        console.log(`${invidedPeople[i]} are not available. ${invidedPeople[i-1]} please make adinner for guest`)
    }
    else{
        console.log(`
    Hi! ${invidedPeople[i]} 
       We are gladly inviting you to join us on ${Date()} as we plan to arrange a delicious dinner party.
       `)
    }
}
