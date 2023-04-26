//extractValue
//Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]

function extractValue(arr, key){
    return arr.reduce(function(accum, nextItem){
        accum.push(nextItem[key]);
        return accum;
    },[]);
}

