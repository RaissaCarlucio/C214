"use strict";
class ToDoListManager {
    constructor() {
        this.tasks = [];
    }
    insertTask(task) {
        this.tasks.push(task);
    }
}
const task = {
    name: "aula 03",
    schedule: new Date("2024-08-23"),
};
const taskManager = new ToDoListManager();
taskManager.insertTask(task);
console.log('Task', task);
