

function DisplayFactors(factor : number) 
{ 

  console.log(`factors of: ${factor}`)
    var Ino1 : number = 1;
    for(var j=0;factor>j;j++)
    {
        
    for(var i = 1 ; factor>=i ;i++)
    {      
       if(Ino1*i == factor)
        {
          console.log(Ino1)
        }

    }
    Ino1++;
    }
}

var Ino = 20;

DisplayFactors(Ino);
