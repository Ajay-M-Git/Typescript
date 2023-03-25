function Fib(Ino : number){

    var Fib1=0
    var Fib2=1
    var Fib3=0

    var i=0;
    while(i<Ino )
    {
        if(Fib3<Ino)
        {
            Fib3=Fib1+Fib2
            Fib1=Fib2
            Fib2=Fib3
            
            
            console.log(Fib3)
            i++;
        }
        else
        {
            break;
        }
        
    }

    console.log(`value of fib ${Fib3}`)
}

var FinNo:number = 21;

Fib(FinNo);


