import { Component } from '@angular/core';
import { TaskService} from '../../services/task.service';
import { Task } from '../../models/Task';



@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  tasks: Task[] = [];

  constructor( public taskService: TaskService ) {
  }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

} 
