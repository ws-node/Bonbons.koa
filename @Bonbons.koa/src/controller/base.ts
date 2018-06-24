import { Context } from "./context";
import { JsonResultOptions, StringResultOptions } from "../metadata/options";
import { JsonResult } from "./result/json";
import { StringResult } from "./result/string";
import { Async, IBonbonsContext as IContext } from "../metadata/base";
import { ReadonlyDIContainer } from "../metadata/di";
import { RenderService } from "../plugins/render";
import { RenderResult } from "./result/render";

export abstract class BaseController {

  private readonly $$ctx!: IContext;
  private readonly $$injector!: ReadonlyDIContainer;
  protected views: any = {};
  public get context() { return this.$$ctx; }

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

  protected render(name: string): RenderResult {
    return new RenderResult(name, this.views);
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
