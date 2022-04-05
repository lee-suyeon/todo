class Controller{
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.registerEventListener(model, view);
  }
  
  registerEventListener(model, view) {
    this.addbutton = document.querySelector('.add-btn')
    this.addbutton.addEventListener("click", () => {
      this.addTodoItem(model, view)
    });
  }

  addTodoItem(model, view) {
    this.newTodo = document.querySelector(".new-todo");
    let todoItem = { id: Date.now(), text: this.newTodo.value, completed: false }
    model.addTodoItem(todoItem); // 투두리스트에 추가
    view.addTodoItem(model.todoList)
    this.newTodo.value = "" // input 비움

    this.deletebutton = document.querySelector('.delete');
    this.deletebutton.addEventListener('click', () => {
      this.deleteTodoItem(todoItem.id)
    })
  }

  deleteTodoItem(id) {
    this.model.deleteTodoItem(id);
    this.view.deleteTodoItem(this.model.todoList)
  }
}

export default Controller;