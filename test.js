var test = require('tape');
var logic = require('./logic');

test('Function should return an object', function(t) {
  const actual = someFunction(blahblah);
  const expected = 'someResult';

  t.pass(actual, expected, 'Some function should give us some result');
  t.end();
});
