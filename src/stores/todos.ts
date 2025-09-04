import { reactive } from 'vue';

type ToDoStore = {
  todos: ToDo[];
  create: (todo: Partial<ToDo>) => ToDo;
  get: (id: number) => ToDo | null;
  update: (id: number, data: Partial<ToDo>) => void;
  delete: (id: number) => void;
};

function persist(todos: ToDo[]) {
  window.localStorage.setItem('todos', JSON.stringify(todos));
}

function load(): ToDo[] {
  const savedToDos = window.localStorage.getItem('todos');
  if (savedToDos !== null) {
    const todos = JSON.parse(savedToDos);
    return todos;
  }

  return [];
}

export default reactive<ToDoStore>({
  todos: load(),
  create: function (todo: Partial<ToDo>) {
    const maxId = Math.max(...this.todos.map((item) => item.id));
    const todoWithId = Object.assign({ ...todo, id: maxId });
    this.todos.push(todoWithId);

    persist(this.todos);
    return todoWithId;
  },
  get: function (id: number) {
    return this.todos.find((item) => item.id === id) || null;
  },
  update: function (id: number, data: Partial<ToDo>) {
    const index = this.todos.findIndex((item) => item.id == id);
    if (index !== -1) {
      this.todos[index] = Object.assign(this.todos[index], data);
    }

    persist(this.todos);
  },
  delete: function (id: number) {
    const index = this.todos.findIndex((item) => item.id == id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }

    persist(this.todos);
  },
});
