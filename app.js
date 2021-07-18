// Global Object Lesson
//=======================

console.log(); // global

// global == window
// browsers have window {}
// node has global {}
// but node.js uses global

//  Exs of methods that are part of the standard set of methods that can be found inside the global {}
// 1. setTimeout()
// 2. clearTimeout()
// 3. setInterval()
// 4. clearInterval()

var message = 'Hello World';
console.log(global.message);
// output: undefined

// *variables and functions are scoped only to this index.js file.

// Module Leason
// =================

console.log(module);
