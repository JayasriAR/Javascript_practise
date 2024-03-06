# JavaScript Practice

Welcome to my JavaScript practice repository! This is where I document my journey to improve my JavaScript skills through coding exercises.

## Practice Log

Here, I will log my progress and notes on what I've worked on.

### [Practise session 1:](https://github.com/JayasriAR/Javascript_practise/tree/main/Day1)
- Worked on a form validation script.
- Implemented validation to ensure that both passwords match.
- Validated for null values in the name, password, and email fields.
- Employed regular expressions to validate email format.

### [Practise session 2](https://github.com/JayasriAR/Javascript_practise/tree/main/Day2)
- Worked on functions like trim and length to validate spaces.
- Continued to enhance understanding of external script inclusion by adding JavaScript functions from external files.

### [Practise session 3](https://github.com/JayasriAR/Javascript_practise/tree/main/Day3)
I have learned about builtin functions.
One of the key practical applications of these string manipulation functions is in form handling. Here's how they can be used in a web form:

- **`trim`**: Use `trim` to remove leading and trailing whitespace from user input. This ensures that user-entered data doesn't have unintended spaces that can cause validation issues.

- **`split`**: `split` can be employed to break a user's input into an array of values based on a delimiter. This is useful for parsing multi-value inputs, such as tags or email addresses.

- **`toLowerCase` and `toUpperCase`**: These functions help standardize user input by converting it to lowercase or uppercase, making it easier to compare and validate.

- **`replace`**: `replace` allows you to replace specific characters or patterns in user input. This is useful for tasks like sanitizing input or formatting it consistently.

### [Practise session 4](https://github.com/JayasriAR/Javascript_practise/tree/main/Day4)
Problem: To identify the duplicate element in an array and to store them separately.
I have learned two new methods in js using that i solved this.
  
- **`indexof()`**: The `indexOf()` method is used to find the index of the first occurrence of a specified element in an array.
  
Usage in Solving the Problem: By iterating through the original array and using `indexOf()`, we can check if an element already exists in the result array (which stores unrepeated elements).
If it does not exist, the element is added to the result array; otherwise, it is considered a duplicate and is stored separately.

**Return Value of indexOf():** The indexOf() method returns the first index at which the specified element can be found in the array, or -1 if the element is not found.

- **`includes()`**: The includes() method checks if an array includes a certain element, returning **true** if found and **false** otherwise.
  
- Additionally i have solved using **nested-for**

### [Practise session 5](https://github.com/JayasriAR/Javascript_practise/tree/main/Day5)

- **`shift()`:**
  The `shift()` function is used to remove the first element from an array.
  
- **`unshift()`:**
  The unshift() function is used to add one or more elements to the beginning of an array.
  
- **`substr()`:** 
  The `substr()` function is used to extract a portion of a string based on specified start and end positions.
  **Real-time application** - Websites like Flipkart utilize the `substring` function to provide a glimpse of product descriptions.
  When users click on a product, this function allows the website to display a limited portion of the text. 
  After clicking, the entire product description becomes visible, enhancing user experience by efficiently managing content visibility.

- **`parseInt()`:** 
  The `parseInt()` function is used to convert a string into an integer.

  ### Practise session 6:
  ## Difference between var, let, const
 ## var

- `var` allows both redeclaration and reassignment.
- You can declare the same variable multiple times within the same scope.
- Example:
  ```javascript
  var a = 1;
  var a = 10;
  console.log(a); // Output: 10

 ## let
- You cannot declare the same variable more than once in the same scope.
- `let` allows reassignment but not redeclaration within the same scope.
- Example:
  ```javascript
  let a = 1;
  let a = 10; // SyntaxError: Identifier 'a' has already been declared
  let a = 1; // SyntaxError: Identifier 'a' has already been declared
  a = 10;
  console.log(a); // Output: 10

## const
- const is more strict than let. It does not allow reassignment or redeclaration.
- You must initialize a const variable when it's declared, and you cannot change its value afterwards.
- Example:
  ```javascript
   const a = 10;
   const b; // SyntaxError: Missing initializer in const declaration
   b = 100; // SyntaxError: Assignment to constant variable.

  
### Practise Session 7
## Blocks
 - In JavaScript, you can group multiple statements within a block, which is also known as a compound statement.
 -  Blocks are delineated by curly braces `{}`.
 - Blocks can be used in places where JavaScript expects a single statement.
 - Example:
   ```javascript
     // group multiple statements in a block it is also known as compound statement
    {
        var a = 40;
        console.log(a); // Output will be 40
   // these group of statements can be used where js except single statement by using block
    }

## Shadowing

 - "shadowing" refers to the situation where a variable declared within a certain scope (like a block) has the same name as a variable declared in an outer scope, thereby "shadowing" or hiding the outer variable within that scope. In your example, the inner variable `b` declared with `let` shadows the outer variable `b`. This is indeed called shadowing. 
 - In JavaScript, variables declared with let are block-scoped, meaning they exist only within the block they are declared in or within nested blocks. This behavior is different from variables declared with var, which have function scope or global scope but not block scope.
 - Example:
    ```javascript
     let b = 100; // Declaring b outside the block
    {
        var a = 10;
        let b = 20; // Declaring a new b inside the block, this shadows the outer 'b'
        const c = 30;
        console.log(b); // Output will be 20, as it refers to the inner 'b'
    }
    console.log(b); // Output will be 100, referring to the outer 'b'

### Practise Session 8
## setTimeout
The setTimeout function schedules the execution of the provided callback function after a specified delay (in milliseconds). 
- Example:
  ```javascript
    function a() {
      for (var i = 1; i <= 5; i++) {
        setTimeout(function() {
          console.log(i);
        }, (i * 1000));
      }
  }
  a();
    
- In the above function `a()`, the output will indeed be `6 6 6 6 6`.
- This occurs because the `setTimeout` function captures the reference of the variable `i`, not its value.
- By the time the `setTimeout` callbacks are executed, the loop has already finished, and `i` has a value of 6. Therefore, `console.log(i)` prints `6` for all the callbacks.

  - Example:
  ```javascript
    function a() {
      for (let i = 1; i <= 5; i++) {
        setTimeout(function() {
          console.log(i);
        }, (i * 1000));
      }
  }
  a();

- In the above function `a()`, which uses `let` instead of `var` to declare `i`, the output will be `1 2 3 4 5`.
- This happens because **`let` has block scope, meaning each iteration of the loop creates a new lexical environment for the variable `i`**.
- Each `setTimeout` callback captures the value of `i` at the time it was created. So, when the callback executes, it uses the specific value of `i` for that iteration.

### [Practise Session 9](https://github.com/JayasriAR/Javascript_practise/tree/main/closure)
## Closures:

 - Closures allow functions to maintain access to variables from their parent scope even after the parent function has finished executing.
 - They are created when a function is defined within another function, and the inner function references variables from the outer function.

 - **Disadvantages of Closures:**

   - Closures can lead to increased memory consumption as they hold references to their outer scope variables.
 - **Garbage Collector:**

   - JavaScript's garbage collector frees up memory by removing unused variables from memory.

### [Practise Session 10](https://github.com/JayasriAR/Javascript_practise/tree/main/first%20class%20functions)
## Functions
**Function statements & Expressions:**
 - JavaScript supports two main ways of defining functions: function statements and function expressions.
 - Function expressions define functions as values and can be assigned to variables.

**Named Function Expression:**
 - A function expression where the function has a name.
 - 
**First-Class Functions:**
 - JavaScript treats functions as first-class citizens, meaning they can be treated like any other variable.
 - Functions can be passed as arguments to other functions, returned from other functions, and assigned to variables.
 
