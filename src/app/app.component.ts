import { Component } from '@angular/core';
import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data';
// import { selfData } from '../data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-project';
  public data: DataManager = new DataManager({
    url: 'https://ej2services.syncfusion.com/production/web-services/api/GanttData',
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

