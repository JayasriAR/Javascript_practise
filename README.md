# JavaScript Practice

Welcome to my JavaScript practice repository! This is where I document my journey to improve my JavaScript skills through coding exercises.

## Practice Log

Here, I will log my progress and notes on what I've worked on.

### Practise session 1: [27-9-23]
- Worked on a form validation script.
- Implemented validation to ensure that both passwords match.
- Validated for null values in the name, password, and email fields.
- Employed regular expressions to validate email format.

### Practise session 2 [29-9-23]:
- Worked on functions like trim and length to validate spaces.
- Continued to enhance understanding of external script inclusion by adding JavaScript functions from external files.

### Practise session 3 [30-9-23]:
I have learned about builtin functions.
One of the key practical applications of these string manipulation functions is in form handling. Here's how they can be used in a web form:

- **`trim`**: Use `trim` to remove leading and trailing whitespace from user input. This ensures that user-entered data doesn't have unintended spaces that can cause validation issues.

- **`split`**: `split` can be employed to break a user's input into an array of values based on a delimiter. This is useful for parsing multi-value inputs, such as tags or email addresses.

- **`toLowerCase` and `toUpperCase`**: These functions help standardize user input by converting it to lowercase or uppercase, making it easier to compare and validate.

- **`replace`**: `replace` allows you to replace specific characters or patterns in user input. This is useful for tasks like sanitizing input or formatting it consistently.

### Practise session 4 [5-10-23]:
Problem: To identify the duplicate element in an array and to store them separately.
I have learned two new methods in js using that i solved this.
  
- **`indexof()`**: The `indexOf()` method is used to find the index of the first occurrence of a specified element in an array.
  
Usage in Solving the Problem: By iterating through the original array and using `indexOf()`, we can check if an element already exists in the result array (which stores unrepeated elements).
If it does not exist, the element is added to the result array; otherwise, it is considered a duplicate and is stored separately.

**Return Value of indexOf():** The indexOf() method returns the first index at which the specified element can be found in the array, or -1 if the element is not found.

- **`includes()`**: The includes() method checks if an array includes a certain element, returning **true** if found and **false** otherwise.
  
- Additionally i have solved using **nested-for**

### Practise session 5 [6-10-23]:

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

  
###Practise Session 7
## Blocks
 - In JavaScript, you can group multiple statements within a block, which is also known as a compound statement.
 -  Blocks are delineated by curly braces `{}`.
 - Blocks can be used in places where JavaScript expects a single statement.
 - You must initialize a const variable when it's declared, and you cannot change its value afterwards.
 - Example:
  ```javascript
     // group multiple statements in a block it is also known as compound statement
  {
      var a = 40;
      console.log(a); // Output will be 40
 // these group of statements can be used where js except single statement by using block
  }
 
