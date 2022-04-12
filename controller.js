class Controller{
  constructor(model, view) {
    this.model = model;
    this.view = view;
    view.bindAddItem(this.addTodoItem.bind(this))
    view.bindDeleteItem(this.deleteTodoItem.bind(this))
    view.bindToggleChecked(this.toggleChecked.bind(this))
    view.bindDeleteAllItem(this.deleteAllItem.bind(this))
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

  toggleChecked(id) {
    this.model.toggleCheck(id, () => {
      this.view.render(this.model.todoList)
    })
  }

  deleteAllItem() {
    this.model.deleteAllItem(() => {
      this.view.render(this.model.todoList)
    })
  }
}

export default Controller;