 //shift unshift
 var fruits=["apple","orange","grapes"];
 console.log("first element removed-----",fruits.shift())
 console.log("first element added-----",fruits.unshift("strawberry","kiwi"))
 console.log("fruits-----",fruits)


 //substring
 var string_content="Hello all myself jayasri. This method is substring which works on index";
 var length=string_content.length; //calculat length
 console.log("----String with restricted length ----",string_content.substr(0,20),"...")


 //parseint
 var ID_array=[1,3,"4","10"];    //array contain string 
 var sum=0;                      //to add elements in array
 var concat=0;
 for (let i = 0; i < ID_array.length; i++) {
   concat=concat+ID_array[i];    //Array contains string hence it concatenate the elements
   sum=sum+parseInt(ID_array[i]);//Hence parseInt func helps to convert the string to integer 
 }
 console.log("---Elementsconcatenate in array----",concat)  //1+3+"4"+"10" = 4410

 console.log("---Elements added in array----",sum)