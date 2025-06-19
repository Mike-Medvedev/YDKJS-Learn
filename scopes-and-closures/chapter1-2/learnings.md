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
