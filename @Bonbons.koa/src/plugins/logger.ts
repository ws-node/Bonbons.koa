import { createToken } from "../di";
import { IConstructor, IENV } from "../metadata/base";

export const GLOBAL_LOGGER = createToken<IConstructor<GlobalLogger>>("GLOBAL_LOGGER");

export abstract class GlobalLogger {
  constructor(env: IENV) { }
  abstract debug(...msgs: any[]): void;
  abstract info(...msgs: any[]): void;
  abstract warn(...msgs: any[]): void;
  abstract error(...msgs: any[]): void;
}

const COLORS = {
  reset: "\x1b[0m",
  red: "\x1b[31m\x1b[1m",
  green: "\x1b[32m",
  blue: "\x1b[34m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
  magenta: "\x1b[35m",
  white: "\x1b[37m"
};

function createStamp(date?: Date): string {
  return `${COLORS.cyan}[${(date || new Date()).toLocaleTimeString()}]${COLORS.reset}-`;
}

function createType(type: "ERROR" | "WARN" | "INFO" | "DEBUG"): string {
  const color = type === "ERROR" ? COLORS.red : type === "WARN" ? COLORS.yellow : type === "INFO" ? COLORS.blue : COLORS.green;
  return `${color}[${type}]${COLORS.reset}${COLORS.white}-`;
}

function createMsg(msg: any, upcase = false): string {
  const c: string = (msg || "").toString();
  return `${COLORS.magenta}[${upcase ? c.toUpperCase() : c}]${COLORS.reset}-`;
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
