import { fs } from "zx";
import minimist from "minimist";
import * as dotenv from 'dotenv';
import Console, { LOG_LEVEL_DEBUG } from "./Console.mts";
import { Config } from "../configs/Config.ts";

export abstract class BaseCommand {
  protected argv: minimist.ParsedArgs;

  public constructor() {
    this.parseArgs();
  }

  protected getArgsList() {
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
      }
    ]
  }

  protected displayUsages() {
    const prefixTab = "\t";
    Console.log(`\nOptions:`);
    this.getArgsList().forEach((args) => {
      Console.log(`${prefixTab}${args.argName}\t\t\t${args.argDescription}`);
    })
  }

  protected parseArgs() {
    this.argv = minimist(process.argv.slice(2));

    if (this.argv?.env) {
      if (fs.existsSync(this.argv.env)) {
        dotenv.config({ path: this.argv.env });
      } else {
        throw new Error(`Cannot find env file ${this.argv.env}`);
      }
    }

    if (this.argv?.h || this.argv?.help) {
      this.displayUsages();
      process.exit(0);
    }

    if (this.argv?.debug) {
      process.env.LOG_LEVEL = `${LOG_LEVEL_DEBUG}`;
    }

    if (this.argv?.['print-config']) {
      Console.log(Config);
      process.exit(0)
    }

    Console.debug(this.argv);
    process.exit(0)
  }
}