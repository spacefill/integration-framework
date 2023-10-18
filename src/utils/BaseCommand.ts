export abstract class BaseCommand {
  protected args: object;

  constructor() {
    this.args = this.parseArgs();
  }

  public parseArgs() {
    const args = process.argv.slice(3);

    if (args?.[0]) {
      return {
        main: args?.[0],
        additionnal: args.slice(1),
      };
    }
  }
}