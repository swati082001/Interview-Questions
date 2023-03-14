Execution Context
Execution context (EC) is defined as the environment in which the JavaScript code is executed. By environment, I mean what variables JavaScript code has access to at a particular time.

Execution context changes when Js starts running a function, that context is called Functional Execution Context. Otherwise, its Global Execution Context by default.

Execution Stack
Execution stack, also known as “calling stack” in other programming languages, is a stack with a LIFO (Last in, First out) structure, which is used to store all the execution context created during the code execution.

When the JavaScript engine first encounters your script, it creates a global execution context and pushes it to the current execution stack.

Whenever the engine finds a function invocation, it creates a new execution context for that function and pushes it to the top of the stack.

Variable Scope
Scope in JavaScript refers to the accessibility or visibility of variables. That is, which parts of a program have access to the variable or where the variable is visible.
Global scope
When you execute a script, the JavaScript engine creates a global execution context. It also assigns variables that you declare outside of functions to the global execution context. These variables are in the global scope. They are also known as global variables.

Local scope
Variables that you declare inside a function are local to that function. They are called Local Variables and can’t be accessed in Global Scope.

Block scope
Variables that you declare inside a block {} using let or const are limited only to that block.

Remember:
Code that has a lot of changing values is unpredictable and hard to figure out bugs.
Immutability helps you keep track of changes done in code making it more solid.
let and const are better ways of declaring variables.
