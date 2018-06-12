import { Context } from "./context";
import { JsonResultOptions, StringResultOptions } from "../metadata/options";
import { JsonResult } from "./result/json";
import { StringResult } from "./result/string";
import { Async } from "../metadata/controller";
import { GlobalLogger, GLOBAL_LOGGER } from "./../plugins/logger";
import { BonbonsConfigCollection } from "./../metadata/di";

export abstract class BaseController {

  private _logger: GlobalLogger;
  /**
   * Logger for all controllers
   * ---
   * It's the instance of GLOBAL_LOGGER what you set in configs.
   *
   * @description
   * @readonly
   * @protected
   * @memberof BaseController
   */
  protected get logger() {
    return this._logger || (this._logger = this.configs.get(GLOBAL_LOGGER));
  }

  private _ctx: Context;
  public get context() { return this._ctx; }

  protected get configs(): BonbonsConfigCollection { return this["_cfgs"]; }

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
