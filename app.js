/*
* 1. Global Object Lesson
* ========================


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

/*
*   2. Module Lesson
* ====================
*/

// *In node every file is a module and the variables and functions in that file are scoped to that module.

console.log(module);
/* output:
Module {
  id: '.',
  path: '/home/projects/node-vrug2w',
  exports: {},
  parent: null,
  filename: '/home/projects/node-vrug2w/app.js',
  loaded: false,
  children: [],
  paths: [
    '/home/projects/node-vrug2w/node_modules',
    '/home/projects/node_modules',
    '/home/node_modules',
    '/node_modules'
  ]
}
*/

/*
 *   4. Load a Module Lesson
 * ============================
 */

const logger = require('./logger');
console.log(logger);

logger.log('Hello World');
