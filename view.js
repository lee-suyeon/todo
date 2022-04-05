class View {
  constructor(model) {
    this.model = model;
    this.removebutton = document.querySelector('.delete')
    this.todoList = document.querySelector('.todo-list')
  }

  render(todos) {
    let list = todos.map(todo => {
      const { text, completed } = todo;
      let item = 
        `<li ${completed ? 'class="completed"' : ""}>
          <input
            type="checkbox"
            class="todo-item"
            ${completed ? "checked" : ""}
          />
          <label>${text}</label>
          <button class="delete">삭제</button>
          </li>`
      return item;
    })
    this.todoList.innerHTML = list.join('\n');
  }

  addTodoItem(todos) {
    this.todoList.innerHTML = '';
    this.render(todos)
  }

  deleteTodoItem(todos) {
    this.render(todos);
  }
}

export default View;