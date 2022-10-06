// Problem Statement 
`Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.`



// Solution
const languages = ['python' , 'java' , 'javaScript' , 'Ruby on Rails','C++']

for (let lang in languages){
    console.log(`${lang}: ${languages[lang]}`)
}