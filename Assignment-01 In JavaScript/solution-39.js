// Problem Statement
`City Names: Write a function called city_country()
that takes in the name of a city and its country.
The function should return a string formatted like this:

"Lahore, Pakistan"`


// Solution
function city_country(cityName){
    return `"${cityName}", Pakistan`
}

console.log(city_country("Lahore"))
console.log(city_country("Islamabad"))
console.log(city_country("Karachi"))