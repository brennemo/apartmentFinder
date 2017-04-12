app.controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {
		text:'Apartment 1', 
		done:true,
		date:  new Date('2016', '08', '01'), 
		photo: 'img/placeholder.png',
		likes: 0
	  },
      {
		text:'Apartment 2', 
		done:false,
		date:  new Date('2016', '08', '01'),
		photo: 'img/placeholder.png',
		likes: 0
	  }
	];
 
    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false, date: new Date('2016', '08', '01'), photo: 'img/placeholder.png', likes:0});
      todoList.todoText = '';
    };
 
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
});