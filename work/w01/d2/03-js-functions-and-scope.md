![](https://i.imgur.com/yxikhiY.jpg
)
# JavaScript Functions & Scope

| Learning Objectives - SWBAT |
| :--- |
| Understand the Use Case of Functions |
| Define Functions With & Without Parameters |
| Call Functions With & Without Arguments |
| Describe Scope |

## Roadmap
1. Why Functions Anyway?
2. Defining and Calling Functions
3. Parameters
4. Scope
5. Further Study

### 1. Why Functions Anyway?

The best way to understand why functions exist in programming is to imagine what programming would be like **without** functions...

Without functions:

- ...we would not be able to break up our programs into manageable chunks - our code would just be one huge monolithic scroll. As humans, we tackle complexity by breaking it down into more manageable pieces. Similarly, as developers, we break a complex program down into more manageable functions.

- ...if we needed to execute the same block of code more than once (outside of a loop), we would have to write the same code again and again. In programming, there's a key principle known as **DRY** - Don't Repeat Yourself!  To stay DRY, we put code that needs to be called multiple times from multiple places into functions.

- ...we could not easily find a section of code that needs debugging and/or modification.  Writing functions and naming those functions appropriately, e.g., `renderBoard`, will allow us to more easily find and fix code not working as expected.

Coding without functions would be unproductive, error-prone, tedious; **impossible**!

#### So, what is a function?

A function is a group of statements that can be called by parts of our code, including from within other functions, as many times as necessary.

The bulk of a JavaScript **program** consists of a collection of functions.  

Many functions are executed in response to events happening, such as when:

- When a user clicks something
- A timer "ticks", etc.

Also, it is common that a program call a "main" or "initialize" function upon the script being loaded to "launch" the application.

**If ALL of the program's code was within functions and there weren't any event listeners or initial code being invoked, what would happen?**

#### Many/Small or Fewer/Large?

It's considered a better practice to have many smaller functions, rather than fewer huge functions.

**Partner up and discuss why you believe this would be the case. Be prepared to share your thoughts in a few minutes.**

### 2. Defining and Calling Functions

#### Setup

For this lesson, we going to one of the many "code playgrounds", [repl.it](https://repl.it/).

_repl.it_ provides an excellent way to learn and experiment with code. It allows you to name and save "repls" which makes it great for creating a library of techniques that you can easily reference in the future and share with others.

Another cool thing about _repl.it_ is that it offers a wide choice of programming languages and can even handle full-stack repls using frameworks like ExpressJS and Django which we'll be covering later in the course.

Okay, go ahead and create a new JavaScript repl and give it a name like "JS Functions".

Now we're ready to review some of what you already know about functions and learn some cool new stuff too...

#### Defining Functions

There are three primary ways to define functions in JS:

##### 1) Function Declaration (AKA Function Definitions)

```js
function sayHello(name) {
    console.log('Hello ' + name + '!');
}
```

##### 2) Function Expression

```js
var sayHello = function(name) {
    console.log('Hello ' + name + '!');
};
```

**What similarities and differences do you see between the two approaches?**

##### 3) Arrow Functions

ES2015 delivered a third approach to defining functions - **Arrow Functions**.

The following function declaration:

```js
// Function Declaration
function add(a, b) {
	return a + b;
}
```

and the following arrow function are equivalent:

```js
// Arrow Function
const add = (a, b) => a + b;
```

Arrow Functions offer:

- A more concise syntax
- Implicit return of a single expression
- A single rule for binding the `this` keyword (more on this next week)

However, as cool as Arrow Functions are, they cannot be used in every scenario due to the way they bind `this`.

Rest assured we'll be using Arrow Functions quite a bit throughout WDI, however, for this lesson we'll focus on Function Declarations and Expressions which have served the language well for over 20 years...

#### Calling Functions

Regardless of which of the three approaches are used to define functions, we call them the same way:

```js
add(25, 100);  // returns 125
```

> **Developer Vocab:** Developers might say **call**, **execute**, **invoke** or "**run** a function" - they all mean the thing.

##### Let's Write Another Function

Let's write the following function together in the repl:

```js
function areBothEven(n1, n2) {
  return !(n1 % 2) && !(n2 % 2);
}
```

The `areBothEven` function is defined to accept two arguments. These arguments should be numbers, otherwise the function as written won't work as expected.

The `return` keyword returns the result of the expression that follows it - which looks kind of crazy, but isn't as intimidating as it appears when you break it down.

> Note: In the real world, much of the code you write will be code designed prevent and handle error conditions. However, in WDI, we choose to keep our code leaner to help illustrate what it is we're trying to teach.  There also just isn't enough time to write the extra code, as important as it is in real apps.

Let's invoke the function a couple of times to try it out.

**Is the above function a function _declaration_ or _expression_?**

Now it's your turn... 

#### Practice Writing Functions

You're going to write two functions, one as a function declaration & the other as a function expression.

This will be an individual exercise, however, feel free to seek guidance from your neighbors and instructor if you get stuck.

##### EXERCISE 1: Write a Function Declaration

Write a function named `computeArea` using the function declaration approach.

It will have two parameters: `width` & `height`.

It will compute the area of a rectangle (_width_ X _height_) and return a string in the following form:

> **The area of a rectangle with a width of ___ and a height of ___ is ___ square units**

Invoke the function to test it.

##### EXERCISE 2: Write a Function Expression

Write a function named `planetHasWater` using the function expression syntax.

It will have one parameter: `planet`.

Return `true` if the `planet` argument is either "Earth" or "Mars", otherwise return `false`.

Bonus points if you ensure the function will work regardless of the casing of the `planet` being passed in ('earth', 'MARS', etc.).

Invoke the function a couple of times to test it!

##### FUNCTION REVIEW QUESTIONS

**How many different ways are there to define a function?**

**What's the only practical difference between a function expression and a function expression?**

### 3. Parameters/Arguments

There are a few tidbits about parameters/arguments to ponder:

- First, let me answer a common question:  _"What's the difference between a parameter and an argument?"_

	<img src="https://i.imgur.com/u5p9n7m.jpg">
	
- Parameters become local variables inside the function body. Therefore, in the example above, `bottle` and `cap` are variables that can be accessed anywhere within the function.
  
- Just like when naming variables and functions, it's important to name parameters using identifiers that convey the data they will hold.

- Arguments are assigned to their respective parameter positionally. In the example above, the `bottle` parameter would be assigned the string "green bottle" because they are the first parameter and argument respectively.

##### Fewer Arguments

JavaScript is very flexible and won't complain when the number of arguments is not the same as the number of parameters defined.

If fewer arguments are passed than parameters defined, then the parameter variables without a matching argument would be set to `undefined`.

> Note: Unlike some other programming languages, JavaScript won't complain if fewer (or extra) arguments are passed to a function.  However, the function that depends on certain arguments to do its job might raise an error or return an unexpected result if it doesn't receive the proper arguments.

##### Extra Arguments

Let's pretend you need to write a function that accepts an unknown number of arguments.

For example, let's say we would like to be able to call a function that accepts a developer's name and any number of their job skills, something like the following:

```js
let maria = getDevObject('Maria', 'HTML', 'CSS', 'JavaScript', 'jQuery');
```
and want that function to return a JS object shaped like this:

```js
{
	devName: 'Maria',
	jobSkills: ['HTML', 'CSS', 'JavaScript', 'jQuery']
}
```

A non-arrow function can access all of its arguments using a "hidden" variable inside of the function named `arguments`.

`arguments` is an array-like JS object that has a `length` property and allows  its values to be accessed via _square bracket_ notation.

This is how we could use the `arguments` object to code the function:

```js
function getDevObject(name) {
  let skills = [];
  for (let i = 1; i < arguments.length; i++) {
    skills.push(arguments[i]);
  }
  return {
    devName: name,
    jobSkills: skills
  };
}
```

> Note: We'll go into detail on arrays and objects tomorrow, so don't worry if the above code isn't very clear to you.

Although the above function works, ES2015 delivered a better approach to working with extra arguments called **Rest Parameters**.

Using _rest parameters_, the above function can be written as follows:

```js
function getDevObject(name, ...skills) {
  return {
    devName: name,
    jobSkills: skills
  };
}
```

The `...skills` that's defined will be true array (unlike `arguments`) holding any extra arguments provided in addition to any other parameters defined in front of it.
  
Obviously, there can only be a single rest parameter and it must be the last parameter in the list.

When writing new code, devs should  use **rest parameters** instead of `arguments` because:

- The existence of the rest parameter in the parameter list better documents the function.
- The rest parameter is a true array and thus includes all of the nifty methods that arrays have.

##### ES2015 Default Parameters

What if your function requires certain arguments and you want to provide a default value for the parameter if an argument is not supplied when the function is invoked?

Prior to ES2015, here is trivial example of what we had to do:

```js
function setColor(bicycle, color) {
	// set color to 'purple' if not provided
	bicycle.color = color || 'purple';
}

var bike = new Bicycle();
setColor(bike, 'blue');  // sets color to blue
setColor(bike);  // sets color to purple by default
```
Now, using **default parameters**, we can do this:

```js
function setColor(bicycle, color = 'purple') {
	bicycle.color = color;
}
```

Any expression can be provided as a default, including objects, etc.

#### Functions as Arguments

In JavaScript, it's easy to pass around functions like they're data (because they are - they're objects).
  
##### Passing an Anonymous Function

Often functions or methods (functions attached to an object) will require a function be provided as an argument.  For example, the `forEach` method on arrays:
	
```js
var a = ['red', 'green', 'blue'];
	
a.forEach(function(color) {
  console.log(color);
});
```
	
Since the function provided to the `forEach` will never be called anywhere else in the code, why create a separate named function and pass it in? **Anonymous functions** like shown above can really come in handy!

##### PARAMETER/ARGUMENT REVIEW QUESTIONS

**What's the difference between an _argument_ and a _parameter_?**

**Explain how _arguments_ and _parameters_ are "matched up".**
  
### 4. Scope

#### What is Scope?

In general, the concept of **scope** in computer programming pertains to the **accessibility** of variables and functions from a given point of the code. In other words, as you write a line of code, what variables and functions do you have access to?

JavaScript has three types of scope:

- A single **global scope**
- **function scope**, also known as **local scope**
- and, **block scope** which was added by ES2015's `let` & `const`

#### Why the Different Types of Scope?

There's a concept in programming known as **The Principle of Least Access**.

The principle is based on the idea that limiting the accessibility of variables (and functions) helps reduce bugs in the code - think of it as a form of "code security".

A practical benefit of having different scope, however, is being able to use the same names for variables in different functions!  If there were only one scope, this wouldn't be possible.

#### Examples of Scope

Ignoring _block scope_ for the moment, let's review the following diagram demonstrates both _global_ and _function_ scope:

![](https://i.imgur.com/UtIoe7F.png)

The diagram identifies 3 different scopes along with the identifiers (variables and functions) that live within each scope.

##### You can look out, but you can't look in!

A key takeaway is that functions have access to the set of variables and functions defined within their own scope AND in the **outer** scopes.

Basically, when a line of code accesses a variable (or function), JS will traverse up the **scope chain** until it finds what it's looking for.

If the JS runtime engine gets to the _global scope_ (which is the top of the food chain in the scope hierarchy) and still can't find what it's looking for, that's when your program ceases due to a **ReferenceError**.


**Does the function `foo` have access to the variable `c`?**

**Off topic question: Does anyone see a slight flaw in the above code?**

##### Global Scope

In our browsers, the global scope is represented by the `window` object.

It is at the top of the scope chain and its properties are available to **every** function we write.

It is generally bad form for our programs to create variables in the global scope.  Doing so risks us overwriting data in use by JS libraries/frameworks or other routines.

Creating lots of global variables is referred to as "polluting the global scope", and we all know that it's not nice to pollute!

If we define a variable within the global scope, it becomes a property on the `window` object. You can see this in action by typing `var pollution = 'sucks'` in the console, then type `window.` (don't forget the dot), scroll down and find the pollution we have created - yuck!

> Although using both `var` and `let` in the global scope results in a global variable being created, interestingly, those created using `let` do not appear as properties on the `window` object.

One way we can prevent our code from leaking into the global scope is by wrapping it with a construct known as an **Immediately Invoked Function Expression**, or "IIFE" (pronounced "iffy").  It looks like this:

```js
(function() {
	'use strict';

	// your code here...
	
})();
```
**? - Why does this construct virtually prevent variables and functions from being created in the global scope?**

One day, when _modules_ are fully implemented in JavaScript, we won't have to screw around with IIFE's :)

##### Block Scope

Both `let` and `const` define variables that can only be accessed within the **code block** they are defined in.

A _code block_ is created by using curly braces.

The following code from [MDN's docs about let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) demonstrates differences between `let` and `var`:

```js
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```

and another example of their differences:

<img src="https://i.imgur.com/K0uJx2P.jpg">

##### Hoisting

Remember how we can call function declarations before they are defined thanks to _hoisting_?

As shown above, similarly, a variable's **declaration** (but not its assignment), is hoisted to the top of the function when it's declared using `var`.

For example, when we write code like this:

```js
function hoist() {
	console.log(x);  // outputs undefined, not a ReferenceError
	var x = 25;
	console.log(x);  // outputs 25
}
```

Internally, the JS engine actually sees this:

```js
function hoist() {
	var x;
	console.log(x);  // outputs undefined, not a ReferenceError
	x = 25;
	console.log(x);  // outputs 25
}
```

**Any questions before moving on the lab where you'll practice writing several functions?**

### 5. Further Study

#### Nesting Functions

As the examples above have shown, we can define functions within functions!

Why would we want to do this? Well, Perhaps an outer function needs a "helper" function that would only be relevant only to a given function. It would be good programming practice to "hide" that function from the rest of the program by nesting it within the function that actually needs it.

For example (no need to execute this):

```js
function openNewAccount(name, openingBalance) {
  let acctNum = generateAcctNum();
  
  // createAccount is a function available outside this function
  let acct = createAccount(acctNum, openingBalance);
  return acct;
  
  // helper function that provides a unique account number
  function generateAcctNum() {
    return Date.now();  // super amazing algorithm :)
  }
}
```

As you can see, there's a nifty `generateAcctNum` function in there and it's only relevant to when a new account is opened, so it's nested within the `openNewAcount` function.


## References

[MDN Functions Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
