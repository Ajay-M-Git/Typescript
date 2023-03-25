
function ChkPrime(No : number)
{   
    for(var i=0; i<No; i++)
    {
        if(No%i==0)
        {
            console.log(No)
        }
    }

}

var Ino : number = 11;
ChkPrime(Ino);