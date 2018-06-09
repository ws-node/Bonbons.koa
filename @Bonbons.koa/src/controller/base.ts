import { Context } from "./context";
import { JsonResultOptions, StringResultOptions } from "../metadata/base";
import { JsonResult } from "./result/json";
import { StringResult } from "./result/string";
import { Async } from "../metadata/controller";

export abstract class BaseController {

  private _ctx: Context;
  public get context() { return this._ctx; }

  /**
   * Returns in JSON format, and supports the use of options to configure serialization behavior
   * @description
   * @author Big Mogician
   * @protected
   * @param {*} json
   * @param {JsonResultOptions} [options]
   * @returns {JsonResult}
   * @memberof BaseController
   */
  protected toJSON(json: any, options?: JsonResultOptions): JsonResult {
    return new JsonResult(json, options);
  }

  /**
   * Returns the body of a string. You can use the encoding of the options configuration string, etc.
   * @description
   * @author Big Mogician
   * @protected
   * @param {string} str
   * @param {StringResultOptions} [options]
   * @returns {StringResult}
   * @memberof BaseController
   */
  protected toStringfy(str: string, options?: StringResultOptions): StringResult {
    return new StringResult(str, options);
  }

  /**
   * Let the current execution sleep for a certain period of time
   * @param time
   * @async
   */
  protected sleep(time: number): Async<void> {
    return new Promise<void>((resolve) => setTimeout(resolve, time || 0));
  }

}
