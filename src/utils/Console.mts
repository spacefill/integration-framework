#!/usr/bin/env zx

import gradient from 'gradient-string';
import prompts from 'prompts';
import { Config } from '../configs/Config.ts';

const LOG_LEVEL_FATAL=1;
const LOG_LEVEL_ERROR=2;
const LOG_LEVEL_WARN=3;
const LOG_LEVEL_INFO=4;
const LOG_LEVEL_DEBUG=5;

const DEFAULT_LOG_LEVEL=LOG_LEVEL_WARN;

const logLevelOrder = {
  debug: LOG_LEVEL_DEBUG,
  info: LOG_LEVEL_INFO,
  warn: LOG_LEVEL_WARN,
  error: LOG_LEVEL_ERROR,
  fatal: LOG_LEVEL_FATAL
};

class Console {
  static prompts(...args) {
    if (!Config.console.interactiveMode) {
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

  static debug(...message) {
    if (logLevelOrder[Config.log.level ?? DEFAULT_LOG_LEVEL] < LOG_LEVEL_DEBUG) {
      return;
    }
    console.log(message);
  }

  static info(...message) {
    if (logLevelOrder[Config.log.level ?? DEFAULT_LOG_LEVEL] < LOG_LEVEL_INFO) {
      return;
    }
    const infoGradient = gradient(['#084C61', '#177E89', '#084C61']);
    Console.printGradient(infoGradient, '[Info]', ...message);
  }

  static warn(...message) {
    if (logLevelOrder[Config.log.level ?? DEFAULT_LOG_LEVEL] < LOG_LEVEL_WARN) {
      return;
    }
    const infoGradient = gradient(['#d08025', '#e67b00']);
    Console.printGradient(infoGradient, '[Warn]', ...message);
  }

  static error(...message) {
    if (logLevelOrder[Config.log.level ?? DEFAULT_LOG_LEVEL] < LOG_LEVEL_ERROR) {
      return;
    }
    const errorGradient = gradient(['#ff0025', 'purple']);
    Console.printGradient(errorGradient, '[Error]', ...message);
  }

  static confirm(...message) {
    const confirmGradient = gradient(['#38c172', '#128e46']);
    Console.printGradient(confirmGradient, '[OK]', ...message);
  }

  static printError(promise) {
    Console.error(
      `[Exit=${promise?.exitCode}] ${promise?.stderr}`,
      `signal: ${promise?.signal}`
    );
    Console.debug(promise?.stdout);
  }

  static printGradient(gradientObj, prefix, ...message) {
    const coloredPrefix = gradientObj(prefix);

    const firstMessage = message?.[0];
    const otherMessages = message.slice(1);

    Config.console.color ? console.log(`${coloredPrefix}`, firstMessage) : console.log(`${prefix}\t`, firstMessage);

    if (otherMessages.length > 0) console.group();
    otherMessages.map((otherMessage) => console.log(otherMessage));
    if (otherMessages.length > 0) console.groupEnd();
  }
}

export {LOG_LEVEL_DEBUG, LOG_LEVEL_INFO, LOG_LEVEL_WARN, LOG_LEVEL_ERROR, LOG_LEVEL_FATAL};
export default Console;
