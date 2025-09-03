import { reactive } from 'vue';

type ToDoStore = {
  todos: ToDo[];
  create: (todo: Partial<ToDo>) => void;
  update: (id: number, data: Partial<ToDo>) => void;
  delete: (id: number) => void;
};

export default reactive<ToDoStore>({
  todos: [
    { id: 1, title: 'Test Title', description: '', dueBy: new Date(), completed: false },
    {
      id: 2,
      title: 'Test Title 2',
      description: 'Some test description',
      dueBy: new Date(),
      completed: true,
    },
  ],
  create: (todo: Partial<ToDo>) => {},
  update: (id: number, data: Partial<ToDo>) => {},
  delete: (id: number) => {},
});
