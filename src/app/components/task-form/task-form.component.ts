import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  constructor(public taskService: TaskService) {
  }

  addTask(newTitle: any, newDescription: any,) {
    console.log("agregando", newTitle.value, newDescription.value);
    this.taskService.addTask({
      title: newTitle.value,
      description: newDescription.value,
      hide: true,
    });
    newTitle.value = "";
    newDescription.value = "";
    newTitle.focus();
    return false;
  }
}
