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
}

export default Model

// remove(query, callback) {
//   let k;

//   const todos = this.getLocalStorage().filter(todo => {
//     for (k in query) {
//       if (query[k] !== todo[k]) {
//         return true;
//       }
//     }
//     return false;
//   });

//   this.setLocalStorage(todos);

//   if (callback) {
//     callback(todos);
//   }
// }