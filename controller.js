class Controller{
  constructor(model, view) {
    this.model = model;
    this.view = view;
    view.bindAddItem(this.addTodoItem.bind(this))
    view.bindDeleteItem(this.deleteTodoItem.bind(this))
  }

  addTodoItem(text) {
    let todoItem = { id: Date.now(), text: text, completed: false }
    this.model.addTodoItem(todoItem); // 투두리스트에 추가
    this.view.addTodoItem(this.model.todoList)
  }

  deleteTodoItem(id) {
    this.model.deleteTodoItem(id, () => {
      this.view.deleteTodoItem(id)
    });
  }
}

export default Controller;