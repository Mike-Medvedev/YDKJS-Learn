# Chapter 3 Diggin into the Roots of JS

## Iteration

- In Javascript Iteration is a common patter on consuming data to operate on it
- If you have more than a handful of items to operate on, assining them to variables doesnt make sense
- An Iterable is a protocol that defines a next() method to get the next element and a done boolean flag to indicate the end of the data structure
- In javascript syntax like for...of and the spread .... operator wrap around this iterator pattern to give us syntax to iterate over iterables
- Iteratables are instances/restults of iterators(themselves)
- var arr = [1, 2, 3], this arr is an iterable in which i can call for...of on.
- for(let val of arr) so that val is each next() element of the array. Calling var y = [...arr] calls next() on each element again and shallow copies it into y
- you can call .keys() .values() or .entries() on an iterable to get that specific part of the iterable.
- var arr = [1, 2, 3]. for(let [index, val] of arr.entries()) where [index, val] is the destructured result of next() on the arr returning the entries

## Closures

- Closures are the most fundamental thing to javascript like values are to variables
- They are what makes javascript tick and are very important to know how they work
- A closure is when a function remembers its variables when the function is called from a different context, still having access to those variables it "closes" over
- function func1(){ //in this example func 2 closes over the data variable and retains a link to that live variable (data in this case)
  let data = "xyz";
  return function func2(){
  console.log(data)
  }
  }
  const consumer = func1()
  consumer() // has access to data and prints "xyz"
- This has to do with the scope because the variable the closure has a link to is actually defined outside its scope
- more importantly, the closure has access to this variable EVEN WHEN the outer function is finished executing

## this keyword

- this keyword is one of the most misunderstood parts of js, and its not necessarily to do with this in a class
- actually the this keyword is a dybanuc characteristic thats determined each time a function is called in its "execution context"
- function func1(){ // func1 doesnt care about this
  return function func2(){ // func2 is a this-aware function
  console.log(this.data)
  }
  }
- var consumer = func1() // this is undefined because this.data doesnt exist in that contetxt
- var someObj = {
  data: "xyz"
  consumer: func1()
  }
- var consumer = someObj.consumer() // this logs "xyz" because "this" context has data in its scope defined

## Prototypes

- Prototypes in javascript are characterists of objects
- In jacvascript the prototype of an object is a link between two other objects
- for example if you create an obj from a norma literal var someObj = {data: "xyz"} the object automatically has a prototype point to the Object.prototype
- This gives it all the inherited values of Object like toString() methods and creates a prototype chain
- So every object is linked to the javascript Object prototype
- Another way to create an Object is Object.create()
- var someObj = {data: "xyz"}
- var newObj = Object.create(someObj)
- newObj.data = "xyz"
- so this created a [[prototype]] chain where newObj -> someObj -> Object
