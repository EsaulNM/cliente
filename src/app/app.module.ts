import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { FooterComponent} from './components/footer/footer.component';

import { TaskService } from './services/task.service';

@NgModule({
  declarations: [	
    AppComponent,
    NavigationComponent,
    TaskFormComponent,
    TaskComponent,
    TaskListComponent,
    FooterComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
