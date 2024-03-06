function counter(){
      var count= 0;
        return function inc_count(){
            count++;
            console.log(count);
           
        }

}
// console.log(count); //cannot access count outside func
 var counter1=counter()
 counter1();
 counter1();
 var counter2=counter() //counter 2 is new --> create closure wuth new count --> new independent copy
 counter2();
 counter2();


 function Count_1(){
        var c=0;
        this.inc_counter = function(){
        c++;
        console.log(c);
        }
        this.dec_counter = function(){
            c--;
            console.log(c);
        }
 }

 var counter3 = new Count_1(); //constructor 
 counter3.inc_counter();
 counter3.dec_counter();

//  disadvantages of closure -->more memory consumption
// garbage collector:
// it is like program. it frees up memory. unused variables are removed from memory.
// closure and garbage collector: 