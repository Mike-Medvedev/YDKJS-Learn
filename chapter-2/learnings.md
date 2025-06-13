# Chapter 2 Surverying JS

## Each File is a program

- Every file in javascript should be treated as its own mini js program
- Although often times in build processes all js files end up combining into a single file
- multiple js files share their state via the "global scope", where they mix together in this global scope namespace at runtime
- In ES6, module format was added, which you can add with an import statement or &lt;script type=module /&gt;
- Each module or program is a collection of state and publicly exposed methods operating on that state
- Importing a module into another allows runtime interoperation between them

## Values

- The fundemental unit of information in a program is a value, values are data
- In Javascript there are two types of values, <strong>primitive</strong> and <strong>object.</strong>
- Primitive Types Include: string, number, bigint, boolean, undefined, null, symbol
- Values embedded in a program are called literals. ("Hi, I am Mike") is a string literal as its not assigned to a variable and used inline
- Values can be embedded or <strong>Interpolated</strong> into strings using back ticks \`. (\`Hi I am ${Mike}\`) is called string interpolation

## Arrays and Objects

- Arrays are a numerically indexed, and ordered colletion of values of any type, even functions
- Objects are unordered, keyed collection of any type and accessed by a string location name aka "key" or "property"
- Objects are accessed with either dot notation or bracket notation

## Value Type Determination

- You can use the typeof operator to check what a type is.
- typeof "mike" = "string"
- typeof true = "boolean"
- typeof null = "object" -interesting quirk of JS
- typeof array = "object"
- typeof undefined = undefined

## Declaring and Using Variables

- Variables are used as containers for values and provide a reference to them (a pointer)
- In javascript there are different ways to declare an identifier (variable)
- The var, let and const keywords are ways to declare an identifier
- The var keyword is regular/function scoped which means the variable it declares is accessible within its entire scope if(true){var x = 'yo'} console.log(x) this works even though x is outside the if block
- let keyword as declares an identifier but it is block-scoped, so it cannot be used outside its scope, if(true) {let x = 'yo'} console.log(x) // this will error
- var and let can be unassigned and re-assigned later
- const is like let but it cannot be re-assigned, const x = 5; x = 6; // this will error. However it does not work well on objects. const arr = [1, 2]; arr[1] = 5; // this works
- The best way to use const is with primitives, ensuring they are immutable
- functions are also keywords used for variables, they declare a function which has var like behavior and also the functions parameter is declared within the functions scope
- the catch clause also defines a variable and the paramter is catch(err) is block scoped like let

##

- Functions in javascript are objects
- They can be defined in a function declaration like function hello(){} or as a function expression var func = function hello(){}
- This is because functions are special, they can be passed around like a value, they are a special object value type.
- Not all languages treat functions as values but for functiona programming its crucial
- functions can recieve any # of params from 0 upwards and each param is scoped to the function like var
- functions can only return a single value
- since functions are values they can be assigned as properties on an object.
  var whatToSay = {
  greeting(){
  console.log("Greetings!")
  },
  question(){
  console.log("How are you?")
  },
  answer(){
  console.log("Im Good.")
  }
  }

## Comparisons

- Javascript has different ways to compute equality (Is X equal to Y?)
- The most common way is using === which uses the values Type and Content for comparison ("42" === "42) //true (42 === "42") //fase
- For primitives this works except for Nan === Nan and 0 === -0, so we use Number.isNan() and Object.is() which are technically ====
- For Objects its more confusing, [1, 2, 3] === [1, 2, 3] //false because when JS compares objects it uses their reference (pointers).
  Since these are array literals, they have different references which means they are unequal. var x = [1, 2, 3]; y = x; x === y // true because they are the same reference both point to [1, 2, 3]

## Coercive Comparison

- In Javascript, coercion is converting a value of one type to another, like a string "42" to a number 42
- When using loose equality, == converts types of the right handside to match the left before comparing, 42 == "42" // true
- When using comparisons like <, >, >=, <= Javascript will coerce the types before checking, so 500 < "1000" is true
