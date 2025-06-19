# Chapter 1 What is Javascript?

- Javascript is a dynamic (interpreted/compiled) language that accounts for about 99% of the code on the internet today
- Javascript code can be sent to any internet browser and executed on the internet. Later node js was invented which seperated js from the browser and allowed it to run in a browserless environment like other languages
- Different internet browsers may not equally support identical features of javascript but all browsers support ecmascript which illustrates the importatnce of the ECMAScript backwards compatability
- The Javascript language is defined by the ECMAScript specs which is a panel of about 40 people that decide on proposed new features to javascript, ensuring that its backwards compatible
- Javascripts backwards compatibility means that new features and versions of javascript will not break on older browsers.
- "Polyfills" are pieces of code written to shim or replace new javascript features with their primitive definition that older browsers will understand. This way es6 code for example can run on an older version flawlessly with polyfills
- Javascript is as compiled language as Java is, so if you think java is a compiled language then you definitely would see javascript as compiled
- Javascript gets transpiled by tools like BABEL and then packed by tools like webpack and other processes and then gets delivered to a JS Engine
- The JS engine parses the code and will early error if there are syntax errors, specified by the spec
- Javascript Engine then builds a AST (Abstract Syntax Tree)
- The parsed javascript code is then converted into a binary intermediate representation (IR) which is optimized futher by the optimizing JIT compiler
- Finally the Javascript Virtual Machine executes the program

- Web Assembly came when developers wanted a way to get native level perforance onto the browser, but were not able to get C code executed byt the JS engine
- Wasm, inspired by ASM.js came as a way to deliver low level code to the browser, essentially skipping parsing stages and delivering the binary code representation that the JS engine already expected
