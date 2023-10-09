import { Component,Input } from '@angular/core';
import { Task } from '../../models/Task';
import { TaskService } from 'src/app/services/task.service'; '../../service/taskService'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  hide: boolean = true;
  @Input()
  task!: Task;
  constructor(public taskService: TaskService){

  }

  deleteTask(task: Task){
    if(confirm('¿Estas seguro de eliminar la tarea?')) {
      this.taskService.deleteTask(task);
    }
  }
}
