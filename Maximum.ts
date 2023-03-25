

function Max(ival1:number ,ival2:number ,ival3:number ) : number
{
    if(ival1>ival2 && ival1>ival3 )
    {
    return ival1;
    }
    else if(ival2>ival1 && ival2>ival3)
    {
        return ival2;
    }
    else    
    {
        return ival3;
    }
}



var ino1 : number = 23
var ino2 : number = 89
var ino3 : number = 6

var ret = Max(ino1,ino2,ino3);

console.log(`Maximum number is ${ret}`);