import minimist from "minimist";
import bytes from "bytes";
import { Console } from "../utils/Console.ts";
import { Config } from "../configs/Config.ts";
import { cpuUsage } from "node:process";

interface CommandStatistic {
  startTimeMs?: number;
  endTimeMs?: number;
  startCpuUsage?: NodeJS.CpuUsage;
  finalCpuUsage?: NodeJS.CpuUsage;
  startMemoryUsage?: number;
  finalMemoryUsage?: number;
}

interface Argument {
  argName: string;
  argDescription: string;
}

export { Argument };

export abstract class BaseCommand {
  protected argv: minimist.ParsedArgs | undefined;
  protected statistics: CommandStatistic = {};

  public constructor() {
    this.parseArgs();
  }

  protected getArgsList(): Argument[] {
    return [
      {
        argName: "-h, --help",
        argDescription: "Console this help and exit.",
      },
      {
        argName: "--debug",
        argDescription: "Force log level to DEBUG.",
      },
      {
        argName: "-e, --env",
        argDescription: "Path to environment variables file. e.g: --env=.env",
      },
      {
        argName: "--wms-default-dir",
        argDescription: "Root dir for transfer. e.g: --wms-default-dir=/root-dir => /root-dir/archives",
      },
      {
        argName: "--print-config",
        argDescription: "Display the environment variables values and exit.",
      },
      {
        argName: "--print-statistics",
        argDescription: "Display the resource usage at the end of the process",
      },
    ];
  }

  protected displayUsages() {
    const prefixTab = "  ";
    const optionMaxLength = 40;
    Console.log(`\nOptions:`);
    for (const args of this.getArgsList()) {
      let nbSpaces = Math.round(optionMaxLength - args.argName.length);
      if (nbSpaces < 1) {
        nbSpaces = 1;
      }
      const separator = " ".repeat(nbSpaces);
      Console.log(`${prefixTab}${args.argName}${separator}${args.argDescription}`);
    }
  }

  protected displayStatistics() {
    const memoryUsage = process.memoryUsage();

    const duration =
      this.statistics.endTimeMs && this.statistics.startTimeMs
        ? this.statistics.endTimeMs - this.statistics.startTimeMs
        : "unknown - check beforeRun() is well implemented";

    Console.info("Statistics", {
      "Resource usage": {
        "cpu time (µs)": this.statistics.finalCpuUsage,
        memory: {
          "Memory used": bytes.format(memoryUsage.rss),
          "Memory used by code": bytes.format(memoryUsage.heapTotal),
          "Memory currently allocated by code": bytes.format(memoryUsage.heapUsed),
        },
      },
      "Duration (ms)": duration,
    });
  }

  protected parseArgs(): void {
    this.argv = minimist(process.argv.slice(2));

    if (this.argv?.env) {
      Config.reloadConfig(this.argv.env);
    }
    if (this.argv?.["wms-default-dir"]) {
      process.env.WMS_DEFAULT_DIR = this.argv["wms-default-dir"];
    }
    if (this.argv?.h || this.argv?.help) {
      this.displayUsages();
      process.exit(0);
    }

    if (this.argv?.debug) {
      process.env.LOG_LEVEL = "debug";
    }

    if (this.argv?.["print-config"]) {
      Console.log(Config);
      process.exit(0);
    }
  }

  protected beforeRun(): void {
    if (this.argv?.["print-statistics"]) {
      this.statistics.startCpuUsage = cpuUsage();
      this.statistics.startTimeMs = new Date().getTime();
    }
  }

  protected afterRun(): void {
    if (this.argv?.["print-statistics"] && this.statistics?.startCpuUsage) {
      this.statistics.finalCpuUsage = cpuUsage(this.statistics.startCpuUsage);
      this.statistics.endTimeMs = new Date().getTime();
      this.displayStatistics();
    }
  }
}
