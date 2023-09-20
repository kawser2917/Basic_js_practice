function getLargeNumberFromArr(numbers){
    let largest = numbers[0]
    for(let i = 0;i<numbers.length;i++){
        let index = i;
        let element = numbers[index]
        if(element>largest){
            largest=element
        }
       
    }
    return largest;

}

const arr = [167,190,120,140,162,280];
const number = getLargeNumberFromArr(arr)
console.log(number)

// Have to find out lowest number from this array