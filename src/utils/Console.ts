import gradient from 'gradient-string';
import prompts from 'prompts';
import { Config } from '../configs/Config.js';

const LOG_LEVEL_FATAL = 1;
const LOG_LEVEL_ERROR = 2;
const LOG_LEVEL_WARN = 3;
const LOG_LEVEL_INFO = 4;
const LOG_LEVEL_DEBUG = 5;
const LOG_LEVEL_TRACE = 6;

const DEFAULT_LOG_LEVEL = LOG_LEVEL_WARN;

const logLevelOrder = {
  trace: LOG_LEVEL_TRACE,
  debug: LOG_LEVEL_DEBUG,
  info: LOG_LEVEL_INFO,
  warn: LOG_LEVEL_WARN,
  error: LOG_LEVEL_ERROR,
  fatal: LOG_LEVEL_FATAL
};

class Console {
  static prompts(...args) {
    if (!Config.get().console.interactiveMode) {
      throw new Error("Prompts is only allowed with interactive mode enabled.")
    }
    return prompts(args);
  }

  static log(...message) {
    const firstMessage = message?.[0];
    const otherMessages = message.slice(1);

    console.log(firstMessage);

    if (otherMessages.length > 0) console.group();
    otherMessages.map((otherMessage) => console.log(otherMessage));
    if (otherMessages.length > 0) console.groupEnd();
  }

  static trace(...message) {
    if (logLevelOrder[Config.get().log.level ?? DEFAULT_LOG_LEVEL] < LOG_LEVEL_TRACE) {
      return;
    }
    const infoGradient = gradient(['#666666', '#aaa', '#666666']);
    Console.printGradient(infoGradient, '[Trace]', ...message);
  }

  static debug(...message) {
    if (logLevelOrder[Config.get().log.level ?? DEFAULT_LOG_LEVEL] < LOG_LEVEL_DEBUG) {
      return;
    }
    const infoGradient = gradient(['#177E89', '#aaa', '#177E89']);
    Console.printGradient(infoGradient, '[Debug]', ...message);
  }

  static info(...message) {
    if (logLevelOrder[Config.get().log.level ?? DEFAULT_LOG_LEVEL] < LOG_LEVEL_INFO) {
      return;
    }
    const infoGradient = gradient(['#084C61', '#177E89', '#084C61']);
    Console.printGradient(infoGradient, '[Info]', ...message);
  }

  static title(message) {
    if (logLevelOrder[Config.get().log.level ?? DEFAULT_LOG_LEVEL] < LOG_LEVEL_INFO) {
      return;
    }
    const infoGradient = gradient(['#084C61', '#177E89', '#084C61']);
    const cliWidth = process.stdout.columns;
    const prefixWidth = 12;
    let maxColumns = 80;
    if ( cliWidth && cliWidth < 80 ) {
      maxColumns = cliWidth - prefixWidth;
    }
    const delta = (maxColumns - message.length) > 0 ? (maxColumns - message.length) : 0;
    Console.printGradient(infoGradient, '[Info]', `${message} ${".".repeat(delta)}`);
  }

  static warn(...message) {
    if (logLevelOrder[Config.get().log.level ?? DEFAULT_LOG_LEVEL] < LOG_LEVEL_WARN) {
      return;
    }
    const infoGradient = gradient(['#d08025', '#e67b00']);
    Console.printGradient(infoGradient, '[Warn]', ...message);
  }

  static error(...message) {
    if (logLevelOrder[Config.get().log.level ?? DEFAULT_LOG_LEVEL] < LOG_LEVEL_ERROR) {
      return;
    }
    const errorGradient = gradient(['#ff0025', '#fe9014', '#ff0025', '#ff0025']);
    Console.printGradient(errorGradient, '[Error]', ...message);
  }

  static fatal(...message) {
    if (logLevelOrder[Config.get().log.level ?? DEFAULT_LOG_LEVEL] < LOG_LEVEL_FATAL) {
      return;
    }
    const errorGradient = gradient(['#ff0025', 'purple']);
    Console.printGradient(errorGradient, '[Fatal]', ...message);
  }

  static confirm(...message) {
    const confirmGradient = gradient(['#38c172', '#128e46']);
    Console.printGradient(confirmGradient, '[OK]', ...message);
  }

  static printGradient(gradientObj, prefix, ...message) {
    const coloredPrefix = gradientObj(prefix);

    const firstMessage = message?.[0];
    const otherMessages = message.slice(1);

    Config.get().console.color ? console.log(`${coloredPrefix}\t`, firstMessage) : console.log(`${prefix}\t`, firstMessage);

    if (otherMessages.length > 0) console.group();
    otherMessages.map((otherMessage) => console.dir(otherMessage, {depth: null}));
    if (otherMessages.length > 0) console.groupEnd();
  }
}

export { LOG_LEVEL_TRACE, LOG_LEVEL_DEBUG, LOG_LEVEL_INFO, LOG_LEVEL_WARN, LOG_LEVEL_ERROR, LOG_LEVEL_FATAL, logLevelOrder };
export default Console;
