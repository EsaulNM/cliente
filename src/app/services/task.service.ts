import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Task} from '../models/Task';



@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:4000/tasks'

  tasks: Task[];
  constructor(private http: HttpClient) { 
    this.tasks = []
  }

  getTask() {
    return this.http.get<Task[]>(this.apiUrl);
  }

  addTask(task: Task) {
    return this.http.post<Task>(this.apiUrl, task);
  }

  deleteTask(task: Task) {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

 /*  getTasks() {
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
  } */
}
