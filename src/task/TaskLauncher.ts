import { Console } from "../index.ts";
import { AbstractTask } from "./AbstractTask.ts";
import { Argument, BaseCommand } from "./BaseCommand.ts";

export interface TaskListInterface {
  [key: string]: {
    mode: {
      [key: string]: new () => AbstractTask;
    };
  };
}

export class TaskLauncher extends BaseCommand {
  private task: AbstractTask | undefined;
  private mode: string = "default";
  private displayHelp: boolean = false;

  private tasksList: TaskListInterface;

  public constructor(taskList: TaskListInterface) {
    super();
    this.tasksList = taskList;
    // There is a bug if the code of parseTaskArgs is directly invoked after the super.parseArgs(),
    // TaskLauncher attributes are reset. Don't know why...
    this.parseTaskArgs();
  }

  protected getArgsList(): Argument[] {
    return [
      ...super.getArgsList(),
      {
        argName: "-t, --task",
        argDescription: "Task name to run.",
      },
      {
        argName: "-m, --mode",
        argDescription: "Mode used to run the task. By default, mode=default.",
      },
    ];
  }

  protected parseArgs(): void {
    const indexOfH = process.argv.indexOf("-h");
    //why > 3 ?: because index-0:node entry point, index-1: script
    if (indexOfH > -1 && process.argv.length > 3) {
      this.displayHelp = true;
      delete process.argv[indexOfH];
    }
    const indexOfHelp = process.argv.indexOf("--help");
    if (indexOfHelp > -1 && process.argv.length > 3) {
      this.displayHelp = true;
      delete process.argv[indexOfHelp];
    }

    super.parseArgs();
  }

  protected parseTaskArgs(): void {
    const taskName = this.argv?.task ?? this.argv?.t;
    if (!taskName) {
      Console.error("Missing task args. Args provided: ", this.argv);
      process.exit(1);
    }
    if (!this.tasksList?.[taskName]) {
      Console.error(`Unknown task ${taskName}. Available tasks:`, Object.keys(this.tasksList));
      process.exit(1);
    }

    this.mode = this.argv?.mode ?? this.argv?.m;

    if (!this.mode) {
      this.mode = "default";
    }

    if (this.mode && !this.tasksList[taskName].mode?.[this.mode]) {
      Console.error(
        `Unknown task mode ${this.mode}. Available task mode for ${taskName}:`,
        Object.keys(this.tasksList[taskName]),
      );
      process.exit(1);
    }

    if (this.displayHelp) {
      process.argv.push("-h");
    }
    Console.title(`Running task ${taskName} in mode ${this.mode}`);
    const taskConstructor = this.tasksList[taskName].mode[this.mode];
    this.task = new taskConstructor();
  }

  public getTask() {
    return this.task;
  }

  public run() {
    if (!this.task) {
      Console.error("Task not initialized. Exit.");
      process.exit(1);
    }
    this.task.run();
  }
}
