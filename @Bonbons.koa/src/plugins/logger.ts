import { createToken } from "../di";
import { IConstructor, IENV } from "../metadata/base";
import { Colors, setColor } from "../utils/console-color";

export const GLOBAL_LOGGER = createToken<IConstructor<GlobalLogger>>("GLOBAL_LOGGER");

export abstract class GlobalLogger {
  constructor(env: IENV) { }
  abstract trace(...msgs: any[]): void;
  abstract debug(...msgs: any[]): void;
  abstract info(...msgs: any[]): void;
  abstract warn(...msgs: any[]): void;
  abstract error(...msgs: any[]): void;
}

export const Logger = GlobalLogger;

export enum LogLevel {
  TRACE = 0,
  DEBUG = 1,
  INFO = 2,
  WARN = 3,
  ERROR = 4,
  FATAL = 5
}

export const COLORS = {
  ...Colors
};

export const ColorsHelper = {
  setColor,
  green(value: any) { return setColor("green", value); },
  cyan(value: any) { return setColor("cyan", value); },
  red(value: any) { return setColor("red", value); },
  blue(value: any) { return setColor("blue", value); },
  yellow(value: any) { return setColor("yellow", value); },
  magenta(value: any) { return setColor("magenta", value); },
  white(value: any) { return setColor("white", value); }
};

function createStamp(date?: Date): string {
  return `[${ColorsHelper.cyan((date || new Date()).toLocaleTimeString())}]-`;
}

function createType(type: LogLevel): string {
  let color: string;
  let tps: string;
  switch (type) {
    case LogLevel.FATAL:
    case LogLevel.ERROR: [color, tps] = ["red", "ERROR"]; break;
    case LogLevel.WARN: [color, tps] = ["yellow", "WARN"]; break;
    case LogLevel.INFO: [color, tps] = ["blue", "INFO"]; break;
    case LogLevel.DEBUG: [color, tps] = ["green", "DEBUG"]; break;
    default: [color, tps] = ["white", "TRACE"];
  }
  return `[${ColorsHelper[color](tps)}]-`;
}

function createModule(msg: any, upcase = false): string {
  const c: string = (msg || "").toString();
  return `[${ColorsHelper.magenta(upcase ? c.toUpperCase() : c)}]-`;
}

function createMethod(msg: any, upcase = false): string {
  const c: string = (msg || "").toString();
  return `[${ColorsHelper.blue(upcase ? c.toUpperCase() : c)}]-`;
}

export class BonbonsLogger implements GlobalLogger {

  constructor(private env: IENV) { }

  private log(type: LogLevel, ...msgs: any[]): void {
    if (this.env.mode === "production") return;
    if (!this.env.trace && type === LogLevel.TRACE) return;
    if (msgs.length === 0) return;
    let logmsg: string;
    let [main, summary, details, ...mores] = msgs;
    let tMsgs;
    switch (msgs.length) {
      case 1: tMsgs = ["x", "x", ...msgs]; break;
      case 2: tMsgs = ["x", ...msgs]; break;
      case 3:
      default: tMsgs = msgs;
    }
    [main, summary, details, ...mores] = tMsgs;
    const more = (mores || []).map(i => `-------------\n${JSON.stringify(i)}`);
    logmsg = `${createStamp()}${createType(type)}${createModule(main, true)}${createMethod(summary)} ${details} ${more.length > 0 ? `\n--------------\nMore: \n${more}` : ""}`;
    console.log(logmsg);
  }

  trace(...msgs: any[]): void {
    return this.log(LogLevel.TRACE, ...msgs);
  }

  debug(...msgs: any[]): void {
    return this.log(LogLevel.DEBUG, ...msgs);
  }

  info(...msgs: any[]): void {
    return this.log(LogLevel.INFO, ...msgs);
  }

  warn(...msgs: any[]): void {
    return this.log(LogLevel.WARN, ...msgs);
  }

  error(...msgs: any[]): void {
    return this.log(LogLevel.ERROR, ...msgs);
  }

}
