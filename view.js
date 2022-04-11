class View {
  constructor(model) {
    this.model = model;
    this.todoList = document.querySelector('.todo-list')
    this.newTodo = document.querySelector('.new-todo')
    this.addBtn = document.querySelector('.add-btn')
  }

  render(todos) {
    let list = todos.map(todo => {
      const { text, completed } = todo;
      let item = 
        `<li id=${todo.id} ${completed ? 'class="completed"' : ""}>
          <input
            type="checkbox"
            class="todo-item"
            ${completed ? "checked" : ""}
          />
          <label>${text}</label>
          <button class="delete-btn">삭제</button>
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
}

export default View;