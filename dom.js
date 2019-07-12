// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById("todo-container");
  var addTodoForm = document.getElementById("add-todo");

  var state = []; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement("li");
    todoNode.setAttribute("id", "todo-unit");

    /* todoNode.addEventListener('click', function() {
    //  var idNeeded = state[]
      todoFunctions.markTodo(state, event.target.id);
      console.log(event.target);
      // something needed in here?
    })
    // you will need to use addEventListener
    // add span holding description */
    var newSpan = document.createElement("span");
    newSpan.innerText = todo.description;
    newSpan.setAttribute("class", "todo-text");
    todoNode.appendChild(newSpan);

    /* this adds the delete button     */
    var deleteButtonNode = document.createElement("button");
    deleteButtonNode.setAttribute("class", "delete-button");
    deleteButtonNode.innerHTML = "❌";
    deleteButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button
    var markTodoButtonNode = document.createElement("button");
    markTodoButtonNode.setAttribute("class", "mark-button");
    if (todo.done == false) {
      markTodoButtonNode.setAttribute("style", "background-color: #2f537d;");
    }
    if (todo.done == true) {
      markTodoButtonNode.innerText = "✅";
    }
    if (todo.done == true) {
      markTodoButtonNode.setAttribute("style", "background-color: green;");
    }
    markTodoButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      // markTodoButtonNode.innerHTML = 'test'
      // if (todo.done == true) {document.getElementById('${todo.id}').setAttribute('style', 'background-color: blue;')}
      // if (todo.done == false) {document.getElementById('${todo.id}').setAttribute('style', 'background-color: green;')}
      //if (todo.done == false) {document.getElementsByClassName("mark-button")[0].innerHTML = "fgesea"}
      console.log(document.getElementsByClassName("mark-button")[0]);
      update(newState);
    });
    todoNode.appendChild(markTodoButtonNode);

    // add classes for css
    return todoNode;
  };

  // bind create todo form
  var todoBlock = document.getElementById("todo-block");
  if (addTodoForm) {
    addTodoForm.addEventListener("submit", function(event) {
      event.preventDefault();
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what is inside event.target?
      var description = event.target.value; // event.target ....
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
    var todoListNode = document.createElement("ul");
    todoListNode.setAttribute("id", "todo-block");
    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
