import { createToken } from "../di";
import { IConstructor, IENV } from "../metadata/base";
import { Colors, setColor } from "../utils/console-color";

export const GLOBAL_LOGGER = createToken<IConstructor<GlobalLogger>>("GLOBAL_LOGGER");

export abstract class GlobalLogger {
  constructor(env: IENV) { }
  abstract debug(...msgs: any[]): void;
  abstract info(...msgs: any[]): void;
  abstract warn(...msgs: any[]): void;
  abstract error(...msgs: any[]): void;
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

function createType(type: "ERROR" | "WARN" | "INFO" | "DEBUG"): string {
  const color = type === "ERROR" ? "red" : type === "WARN" ? "yellow" : type === "INFO" ? "blue" : "green";
  return `[${ColorsHelper[color](type)}]-`;
}

function createMsg(msg: any, upcase = false): string {
  const c: string = (msg || "").toString();
  return `[${ColorsHelper.magenta(upcase ? c.toUpperCase() : c)}]-`;
}

export class BonbonsLogger implements GlobalLogger {

  constructor(private env: IENV) { }

  private log(type: "ERROR" | "WARN" | "INFO" | "DEBUG", ...msgs: any[]): void {
    if (this.env.mode === "production" && type === "DEBUG") return;
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
    logmsg = `${createStamp()}${createType(type)}${createMsg(main, true)}${createMsg(summary)} ${details} ${more.length > 0 ? `\n--------------\nMore: \n${more}` : ""}`;
    console.log(logmsg);
  }

  debug(...msgs: any[]): void {
    return this.log("DEBUG", ...msgs);
  }

  info(...msgs: any[]): void {
    return this.log("INFO", ...msgs);
  }

  warn(...msgs: any[]): void {
    return this.log("WARN", ...msgs);
  }

  error(...msgs: any[]): void {
    return this.log("ERROR", ...msgs);
  }

}
