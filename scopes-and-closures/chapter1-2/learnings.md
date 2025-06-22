## Chapter 1 JS compilations revisited

- JS is more of a compiled language then not
- if you write console.log("hi"); var x . = ~ 5; you will get an error during lexing (hence compiled language) unkown token .
- the stages are lexing, parsing AST, compiling, executing
- the lexing phase extracts each token from statements
- the parser takes the stream of tokens for the lexer and builds an AST
- the AST is compiled into intermediate bytecode instructions
- the bytecode gets executed which runs the program

## Chapter 2

- In javascript, the scope is referred to as "lexical scope"
- lexical scope refers javascript managing variables/identifiers based on their lexical postion, like if its in a function, or in a for loop or if its in the global scope etc
- each different scope has its own instance of a "Scope Manager"
- each scope when executed has a list of all the variables associated with the scope
- during compiling the AST into bytecode, the compiler asks the scope manager if he has seen each variable, if yes move on if no move outwards (parent scope if not global) and check if the variable is there

## Chapter 3

- Scope is actually pre determined and included in the AST so during compilation variables are associated with their scope buckets
- Scope starts at the inner most scope of a program and moves outward, called the scope chain, which are buckets containing variables
- Two variables with the same name can exist in different scopes, the program will only use however the variable in that scope, not possible reference the outer scope variable unless you use window.variable but that is looked down on
- Having an identical variable in a different scope is known as "shadowing" the outer scope variable

## Chapter 4- Global Scope

- Global Scope is the topmost scope that exists in a JS environment and contains all the Javascript Built-ins, WebAPI's like fetch() and more.
- The global scope is different per environemnt like the Browser (global is the window) or Node (global is global)
- JS Exposes all its built ins like String() Object() primitives natives, namespaces in the global object
- The environemnt hosting the Js Engine does as well like console and the DOM, etc
- When a JS file is sent to a JS environment, depending on the module system, top level variables are treated in a certain way
- In ESM modules, each file is a module and essentially wraps its contents in a "module-global-scope" so var-declared variables are not intefering with the global scope
- you can declare variables in the global scope onto the global object and that is accessible by all
- in node you have commonJs and recently ESM, which are different ways to handle modules, commonJS uses require and module.exports, and also wraps modules in a function and exposes variables like \_\_dirname, and require() as a "module-global", theres no window but theres a globals object
- WEb workers are a way to run code in a seperate thread in the browser that does not block the main thread, its got a seperate Global Object with slightly different api's and no built in dom

## Chapter 5- Variable Life Cycle

- Variables in javascript have special properties when declared
- When a variable is declared, the indentifiers are added to the instance of its scope
- these variables are hoisted and initialized based on var, let, an const
- Var variables are hoisted to the top of the scope no matter what position they are declared
- var variables then are initialized with undefined so they are not in temporal dead zone (TDZ)
- let variables are hoisted but block scoped but are added to the TDZ until actually declared
- const and let variables cannot be re declared
- const cannot be re assigned
