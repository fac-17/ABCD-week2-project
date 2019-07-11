// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    /* todoNode.addEventListener('click', function() {
    //  var idNeeded = state[]
      todoFunctions.markTodo(state, event.target.id);
      console.log(event.target);
      // something needed in here?
    })
    // you will need to use addEventListener
    // add span holding description */
    var newSpan = document.createElement('span');
    newSpan.innerText = todo.description;
    newSpan.setAttribute('class', 'todo-text')
    todoNode.appendChild(newSpan);


    // add markTodo button
    var markTodoButtonNode = document.createElement('button');
    markTodoButtonNode.setAttribute('class', 'mark-button')
    markTodoButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(markTodoButtonNode);
    // add classes for css
    return todoNode;
  };



  // add deleteButton






//   var markTodoButtonNode = document.createElement('button');
//   markTodoButtonNode.setAttribute('class', 'mark-button')
//   markTodoButtonNode.addEventListener('click', function(event) {
//     var newState = todoFunctions.markTodo(state, todo.id);
//     update(newState);
//   });
//   todoNode.appendChild(markTodoButtonNode);
//
//   // add classes for css
//
//   return todoNode;
// };



  // bind create todo form
  var todoBlock = document.getElementById('todo-block')
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      event.preventDefault();
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what is inside event.target?
      var description = event.target.value // event.target ....
      var newState = todoFunctions.addTodo(state, description); // ?? change this!
      event.target.reset();
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
