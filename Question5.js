//  Write a function that takes an object with two properties as an argument. It should return the value of the property with key 'prop-2'. Tip: you might want to use the square brackets property accessor



function getProp2(obj){
    return obj['prop-2'];
}

const objectInput={
    "prop-1": 'value-1',
    "prop-2": 'value-2'
}

console.log(getProp2(objectInput));