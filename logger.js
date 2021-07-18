/*
 *   3. Creating a Module Lesson
 * ================================
 */

var url = 'http://mylogger.io';

function log(message) {
  // Send an http request
  console.log(message);
}

module.exports.log = log;
// module.exports.endpoint = url;
