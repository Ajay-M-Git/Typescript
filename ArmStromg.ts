
function isArmstrongNumber(num: number): boolean {
    var numStr = num.toString();
    var numDigits = numStr.length;
    let sum = 0;
  
    for (let i = 0; i < numDigits; i++) {
      const digit = parseInt(numStr.charAt(i), 10);
      
      sum += digit*digit*digit; 
      
    }
  
    return sum === num;
  }

const no:number = 153
var value:boolean = isArmstrongNumber(no);

if(value == true){
    console.log(no+" :: Is Armstrong no");
}
else{
    console.log(no+" :: Is not Armstrong no")
}