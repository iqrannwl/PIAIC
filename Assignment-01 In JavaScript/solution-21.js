// Problem Statement
`They think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.`



// Solution
const languages = ['python' , 'java' , 'javaScript' , 'RubyonRails','Cpp']

const langs = {

}

for (let lang in languages){
    // console.log(`${lang}: ${languages[lang]}`)
    langs[languages[lang]] = languages[lang]
}

console.log(langs)