import minimist from "minimist";
import bytes from "bytes";
import Console from "../utils/Console.js";
import { Config } from "../configs/Config.js";
import { cpuUsage } from "node:process";

interface CommandStatistic {
  startTimeMs?: number,
  endTimeMs?: number,
  startCpuUsage?: NodeJS.CpuUsage,
  finalCpuUsage?: NodeJS.CpuUsage,
  startMemoryUsage?: number,
  finalMemoryUsage?: number,
}

interface Argument {
  argName: string,
  argDescription: string
}

export { Argument };

export abstract class BaseCommand {
  protected argv: minimist.ParsedArgs;
  protected statistics: CommandStatistic = {};

  public constructor() {
    this.parseArgs();
  }

  protected getArgsList(): Argument[] {
    return [
      {
        argName: "-h, --help",
        argDescription: "Print this help and exit."
      },
      {
        argName: "--debug",
        argDescription: "Force log level to DEBUG."
      },
      {
        argName: "--env",
        argDescription: "Path to environment variables file. e.g: --env=.env"
      },
      {
        argName: "--print-config",
        argDescription: "Display the environment variables values and exit."
      },
      {
        argName: "--print-statistics",
        argDescription: "Display the resource usage at the end of the process"
      }
    ]
  }

  protected displayUsages() {
    const prefixTab = "  ";
    const optionMaxLenght = 40;
    Console.log(`\nOptions:`);
    for (const args of this.getArgsList()) {
      let nbSpaces = Math.round(optionMaxLenght - args.argName.length);
      if (nbSpaces < 1){
        nbSpaces = 1;
      }
      const separator = " ".repeat(nbSpaces);
      Console.log(`${prefixTab}${args.argName}${separator}${args.argDescription}`);
    }
  }

  protected displayStatistics() {
    const memoryUsage = process.memoryUsage();

    Console.info("Statistics",
      {
        "Resource usage": {
          "cpu time (µs)": this.statistics.finalCpuUsage,
          memory: {
            "Memory used": bytes.format(memoryUsage.rss),
            "Memory used by code": bytes.format(memoryUsage.heapTotal),
            "Memory currently allocated by code": bytes.format(memoryUsage.heapUsed),
          }
        },
        "Duration (ms)": (this.statistics.endTimeMs - this.statistics.startTimeMs)
      }
    );
  }

  protected parseArgs(): void {
    this.argv = minimist(process.argv.slice(2));

    if (this.argv?.env) {
      Config.reloadConfig(this.argv.env);
    }

    if (this.argv?.h || this.argv?.help) {
      this.displayUsages();
      process.exit(0);
    }

    if (this.argv?.debug) {
      process.env.LOG_LEVEL = 'debug';
    }

    if (this.argv?.['print-config']) {
      Console.log(Config);
      process.exit(0)
    }
  }

  protected beforeRun(): void {
    if (this.argv?.['print-statistics']) {
      this.statistics.startCpuUsage = cpuUsage();
      this.statistics.startTimeMs = new Date().getTime();
    }
  }

  protected afterRun(): void {
    if (this.argv?.['print-statistics'] && this.statistics?.startCpuUsage) {
      this.statistics.finalCpuUsage = cpuUsage(this.statistics.startCpuUsage);
      this.statistics.endTimeMs = new Date().getTime();
      this.displayStatistics();
    }
  }
}