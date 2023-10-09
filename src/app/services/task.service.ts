import { Injectable } from '@angular/core';
import {Task} from '../models/Task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[];
  constructor() { 
    this.tasks = []
  }

  getTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks === null) {
      return this.tasks; 
    } else {
      this.tasks = JSON.parse(storedTasks);
    }
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
    let tasks: Task[] = [];
    // Comprobamos si ya hay tareas en el almacenamiento local
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks === null) {
      // Si no hay tareas, creaamos un nuevo array y agregamos la tarea
      tasks.push(task);
    } else {
      // Si ya hay tareas, obténemos y parseamos el array existente
      tasks = JSON.parse(storedTasks);
      // Agregamos la nueva tarea al array
      tasks.push(task);
    }
  
    // Guardamos el array actualizado en el almacenamiento local
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  deleteTask(task: Task) {
    for(let i = 0; i < this.tasks.length; i++) {
      if(task == this.tasks[i]) {
        this.tasks.splice(i, 1);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    }
  }
}
