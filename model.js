class Model {
  constructor() {
    this.todoList = [];
  }

  addTodoItem(item) {
    this.todoList.push(item);
  }

  deleteTodoItem(itemIndex) {
    let findIndex = this.todoList.findIndex(list => list.id === itemIndex);
    this.todoList.splice(findIndex, 1)
  }
}

export default Model