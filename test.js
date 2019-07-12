var test = require('tape');
var logic = require('./logic');

var todos = [
  {id: 0, description: 'make tea', done: false},
  {id: 1, description: 'make eggs', done: true},
]
var newTodo = { description: 'make smoothie' };



/* TESTS RELATING TO THE addTodo FUNCTION */

test('addTodo returns an object', function(t) {
  const actual = typeof logic.addTodo(todos, newTodo);
  const expected = "object";
  t.equal(actual, expected, 'addTodo returns an object');
  t.end();
});

test('original todo\'s stay the same', function(t) {
  const actual = todos;
  logic.addTodo(todos, newTodo)
  const expected = todos;
  t.deepEqual(actual, expected, 'original todo\'s stay the same');
  t.end();
});

test('new todos have an additional element', function(t) {
  const actual = logic.addTodo(todos, newTodo).length;
  const expected = todos.length + 1;
  t.deepEqual(actual, expected, 'new todos have an additional element');
  t.end();
});

test('new object has three elements within', function(t) {
  const actual = Object.values(logic.addTodo(todos, newTodo)[logic.addTodo(todos, newTodo).length-1]).length;
  const expected = todos.length+1;
  t.deepEqual(actual, expected, 'new object has three elements within');
  t.end();
});

test('new element description is equal to newTodo', function(t) {
  const actual = logic.addTodo(todos, newTodo)[logic.addTodo(todos, newTodo).length-1].description;
  const expected = newTodo;
  t.deepEqual(actual, expected, 'new element description is equal to newTodo');
  t.end();
});

test('new element is default set to false', function(t) {
  const actual = logic.addTodo(todos, newTodo)[logic.addTodo(todos, newTodo).length-1].done;
  const expected = false;
  t.deepEqual(actual, expected, 'new element description is equal to newTodo');
  t.end();
});

test('new element ID is a number', function(t) {
  const actual = typeof logic.addTodo(todos, newTodo)[logic.addTodo(todos, newTodo).length-1].id;
  const expected = 'number';
  t.deepEqual(actual, expected, 'New element ID is a number');
  t.end();
});


/* TESTS RELATING TO THE markTodo FUNCTION */

var idToMark = 1;


test('original todo\'s stay the same', function(t) {
    const actual = todos;
    logic.markTodo(todos, idToMark)
    const expected = todos;
    t.deepEqual(actual, expected, 'original todo\'s stay the same');
    t.end();
  });

  test('check done attribute of modified element is a boolean', function(t) {
    const actual = typeof logic.markTodo(todos, idToMark)[idToMark].done; // this doesn't refer to the right
    const expected = "boolean";
    t.deepEqual(actual, expected, 'check done attribute of modified element is a boolean');
    t.end();
  });


  test('check the idToMark element done has changed', function(t) {
    var result = logic.markTodo(todos, idToMark);
    const actual = result[idToMark].done !== todos[idToMark].done;
    const expected = true;
    //newTodos.map(function(item) {
    //  if (item.id == idToMark) {console.log(item); continue};
    //  else return item =
    //}
    t.deepEqual(actual, expected, 'check the idToMark element done has changed');
    t.end();
  });
