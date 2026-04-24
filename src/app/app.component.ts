import { Component } from '@angular/core';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data';
// import { selfData } from '../data';
@Component({
  selector: 'app-root',
  imports:[GanttModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-project';
  public data: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/angular/production/api/GanttData',
    adaptor: new WebApiAdaptor,
    crossDomain: true
  });
  
  public taskSettings: object = {
    id: "TaskId",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress",
    child: "SubTasks",
    dependency: "Predecessor"
  }
};

