// diff betw func statement & func expression is hoisting
a(); //executed correctly
// b(); //var is undefined hence it shows its not func

//1. function statement or Function declaration 
console.log("function statement or Function declaration");
function a(){
    console.log("function statement")
}
// a();


//2. function expression
console.log("2. function expression");
let b = function(){
    console.log("b called")
}
b();



//3. anonymous function --> no name, it has no identity
// anonymous functions are used in a place where it is function are used as values
// it can be assigned to an variable 
// function(){

// } 
// output : Function statements require a function name


// 4. named function ecpression
console.log("4. named function ecpression");
var d = function name1(){
    console.log("named funcion expression");
}
d();
// name1(); //ReferenceError: name1 is not defined



// 5. Difference btw parameter and argument
console.log("5. Difference btw parameter and argument")
// actual values passed to func ---> arguments
// parameter are labels 
function sample(param1){
 console.log("param1 is parameter");
}

sample(12); //--> 12 is argument



// 6. First class functions
console.log("6. First class functions")
document.getElementById("def").innerHTML="A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable."



function dog(param1){
console.log(param1);
}

dog(function(){

}); //(anonymous) function passed as argument

function xyz(){

}
dog(xyz); //(named) function passed as argument

function cat(){
    return function(){
        var a = "happy";
    }
}

console.log(cat());

// first class citizens --> first class functions

