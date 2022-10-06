// Problem Statement
`Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.`



// Solution
function carInfo(manufacturer,model,other_feature){
    carinformation = {
        manufacturer:manufacturer,
        model:model
    }
    for (let feature in other_feature){
        carinformation[other_feature[feature]]=other_feature[feature]
    }
    return carinformation
}

car = carInfo("honda" , 1998 , ["black" , 'accord'])
console.log(car)