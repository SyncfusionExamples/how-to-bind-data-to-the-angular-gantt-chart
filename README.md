# Angular Gantt Data Binding Example

A sample Angular application demonstrating how to bind the Syncfusion Angular Gantt Chart to both remote and local data sources.

## Repository Description

This repository provides an Angular example showing how the Syncfusion Gantt Chart can be configured to load task data from a remote API endpoint or from local in-memory data collections.

## Prerequisites

- Node.js (LTS or later)
- Angular CLI


## Installation

```bash
npm install
npm start
```

Open `http://localhost:4200`.

## Usage

Remote binding is configured in `src/app/app.component.ts`:

```ts
public data: DataManager = new DataManager({
  url: 'https://services.syncfusion.com/angular/production/api/GanttData',
  adaptor: new WebApiAdaptor(),
  crossDomain: true
});
```

The template binds the configured source:

```html
<ejs-gantt height="490px" [dataSource]="data" [taskFields]="taskSettings"></ejs-gantt>
```

## Task field mapping

```ts
public taskSettings: object = {
  id: 'TaskId',
  name: 'TaskName',
  startDate: 'StartDate',
  duration: 'Duration',
  progress: 'Progress',
  child: 'SubTasks',
  dependency: 'Predecessor'
};
```

## Local data source

`src/data.ts` has:
- `projectNewData` � hierarchical tasks
- `selfData` � self-referential tasks with `parentID`

Use local arrays instead of the remote `DataManager` for offline binding.

## Notes

- Uses Syncfusion hosted API endpoint.
- Local arrays in `src/data.ts` can replace remote binding.
