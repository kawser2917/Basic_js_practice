function largestNumber(num1,num2,num3){
    if(num1>num2 && num1 > num3 ){
        return num1;
    }
    else if(num2>num1 && num2>num3){
        return num2
    }
    else{
        return num3
    }
}

let largeNumber = largestNumber(50,45,95)
console.log(largeNumber)

function largestNumber2(num4,num5,num6){
    const largeNumber2 = Math.max(num4,num5,num6);
    return largeNumber2;
}

let largeNumberResutl = largestNumber2(80,85,99)
console.log(largeNumberResutl)
// Note: We can find out minimun number also 
