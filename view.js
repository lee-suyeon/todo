class View {
  constructor(model) {
    this.model = model;
    this.todoList = document.querySelector('.todo-list')
    this.newTodo = document.querySelector('.new-todo')
    this.addBtn = document.querySelector('.add-btn')
    this.footer = document.querySelector('.footer')
  }

  render(todos) {
    let list = todos.map(todo => {
      const { text, completed } = todo;
      let item = 
        `<li id=${todo.id} class="todo-item ${completed ? "completed" : ""}">
          <span>◾️</span>
          <span class="todo-text">${text}</span>
          <span class="delete-btn">❌</span>
        </li>`
      return item;
    })
    this.todoList.innerHTML = list.join('\n');
  }

  bindAddItem(handler) {
    this.addBtn.addEventListener('click', () => {
      let text = this.newTodo.value;
      handler(text)
      this.newTodo.value = "";
    })
  }

  addTodoItem(items) {
    this.render(items)
  }

  bindDeleteItem(handler) {
    this.todoList.addEventListener('click', (event) => {
      let target = event.target;
      if(target.className !== "delete-btn") return;
      let list = target.closest('li')
      handler(list.id)
    })
  }

  deleteTodoItem(id) {
		const deleteElement = document.querySelector(`[id="${id}"]`);
		if (deleteElement) {
			this.todoList.removeChild(deleteElement);
		}
  }
  
  bindDeleteAllItem(handler) {
    this.footer.addEventListener('click', (event) => {
      let target = event.target;
      if(target.className !== "all-delete") return;
      handler()
    })
  }

  bindToggleChecked(handler) {
    this.todoList.addEventListener('click', (event) => {
      let list = event.target.closest('li')
      handler(list.id)
    })
  }

}

export default View;