var test = require('tape');
var logic = require('./logic');

var todos = [
  {id: 0, description: 'make tea', done: false},
  {id: 1, description: 'make eggs', done: true},
]
var newTodo = { description: 'make smoothie' };


test('addTodo returns an object', function(t) {
  const actual = typeof logic.addTodo(todos, newTodo);
  const expected = "object";
  t.equal(actual, expected, 'addTodo returns an object');
  t.end();
});

test('originial todo\'s stay the same', function(t) {
  const actual = todos;
  logic.addTodo(todos, newTodo)
  const expected = todos;
  t.deepEqual(actual, expected, 'originial todo\'s stay the same');
  t.end();
});

test('new todos have an additional element', function(t) {
  const actual = logic.addTodo(todos, newTodo).length;
  const expected = todos.length + 1;
  t.deepEqual(actual, expected, 'new todos have an additional element');
  t.end();
});

test('new test', function(t) {
  const actual = logic.addTodo(todos, newTodo).length;
  const expected = todos.length + 1;
  t.deepEqual(actual, expected, 'new test');
  t.end();
});
