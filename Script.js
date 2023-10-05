var array=["arun","tharun","karan","arun","tharun"];
var originalarray=[];
var duplicatearray=[];
//optimized code
for (let index = 0; index < array.length; index++) {
if(originalarray.indexOf(array[index])==-1){
originalarray.push(array[index]);
}
else{
duplicatearray.push(array[index]);
}

}  
console.log('original array-----using indexof-----',originalarray);
console.log('duplicate array----using indexof-----',duplicatearray);

//nested for
for (let i = 0; i < array.length-1; i++) {   
for (let j = i+1; j < array.length; j++) {
if(array[i]==array[j]){
  duplicatearray.push(array[i]);
}
else if(originalarray.includes(array[j])==false){
originalarray.push(array[j]);
} 
}
}
console.log('original array-----using nestedfor-----',originalarray);
console.log('duplicate array----using nestedfor-----',duplicatearray);

//optimized code
for (let i = 0; i < array.length-1; i++) {   

if(originalarray.includes(array[i])==false){
  duplicatearray.push(array[i]);
}
else {
originalarray.push(array[j]);
} 

}
console.log('original array-----using includes-----',originalarray);
console.log('duplicate array----using includes-----',duplicatearray);