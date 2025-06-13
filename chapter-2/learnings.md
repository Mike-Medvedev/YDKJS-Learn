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
- In Javascript there are two types of values, <em>primitive</em> and <em>object.</em>
- Primitive Types Include: string, number, bigint, boolean, undefined, null, symbol
- Values embedded in a program are called literals. ("Hi, I am Mike") is a string literal as its not assigned to a variable and used inline
- Values can be embedded or <em>Interpolated</em> into strings using back ticks \`. (\`Hi I am ${Mike}\`) is called string interpolation

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
