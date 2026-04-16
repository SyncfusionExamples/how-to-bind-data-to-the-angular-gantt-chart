# Angular Gantt Data Binding Example

A demo repository showing Syncfusion Angular Gantt Chart binding with remote and local data.

## Project overview

- Angular `~19.2.16`
- `@syncfusion/ej2-angular-gantt`
- Remote data source with local sample fallback
- Core files: `src/app/app.component.ts`, `src/app/app.component.html`, `src/data.ts`

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
  url: 'https://ej2services.syncfusion.com/production/web-services/api/GanttData',
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
