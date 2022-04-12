class Model {
  constructor() {
    this.todoList = [];
  }

  addTodoItem(item) {
    this.todoList.push(item);
  }

  deleteTodoItem(id, callback) {
    let findIndex = this.todoList.findIndex(list => list.id === id);
    this.todoList.splice(findIndex, 1)

    if(callback) {
      callback(this.todoList)
    }
  }

  toggleCheck(id, callback) {
    let findIndex = this.todoList.findIndex(list => list.id === parseInt(id));

    if(findIndex !== -1) {
      this.todoList[findIndex].completed = !this.todoList[findIndex].completed
    }
    if(callback) {
      callback(this.todoList)
    }
  }
  
  getTodoList() {
    return this.todoList;
  }
}

export default Model