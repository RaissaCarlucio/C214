type Task = {
  name: string;
  schedule: Date;
};

class ToDoListManager {
  private tasks: Task[] = [];
  constructor() {}

  insertTask(task: Task) {
    this.tasks.push(task);
  }
}

const tarefa: Task = {
  name: "aula 03",
  schedule: new Date("2024-08-23"),
};

const taskManager = new ToDoListManager();

taskManager.insertTask(task);
